Collection=function(products,options){
	var options_default={
		mode        : 'detach',// hide or detach
		title       : '.title',
		type        : '.type',
		vendor      : '.vendor',
		collections : 'collections',
		price       : '.price',
		price_old   : '.price_old',
		tags        : 'tags',
		is_new      : '.new',
		is_sale     : '.sale'
	};
	options=options?$.extend(options_default,options):options_default;

	var self=this;
	this.options=options;
	this.options.mode=options.mode||'detach';// hide or detach
	this.container=products.parent();
	this.container_count=null;
	this.container_paging=null;
	this.container_paging_original='';
	this.colours=[];
	this.product=[];
	products.each(function(){
		var $this=$(this);
		self.product.push({
			element:options.mode=='hide'?$this.hide():$this.detach(),
			title:$this.find(options.title).text(),
			type:$this.find(options.type).text(),
			vendor:$this.find(options.vendor).text(),
			collections:($this.data(options.tags)||'').split(' '),
			price:parseFloat($this.find(options.price).text().replace(/,/g,'').match(/(\d+\.?)+/)),
			price_old:parseFloat($this.find(options.price_old).text().replace(/,/g,'').match(/(\d+\.?)+/)),
			tags:($this.data(options.tags)||'').split(' '),
			is_new:!!$this.find(options.is_new).length,
			is_sale:!!$this.find(options.is_sale).length
		});
	});

	this.displayed=false

	this.view_size=20;
	this.view_page=0;

	this.sort_name='';

	this.ui_nextpage=null;
	this.ui_prevpage=null;

	this.ui_filter_vendor    =[];
	this.ui_filter_type      =[];
	this.ui_filter_tag       =[];
	this.ui_filter_collection=[];
	this.ui_filter_price     =[];
	this.ui_filter_property  =[];

	this.message_empty='';

	this.row_clear_size=0;

	this.reset();
}
Collection.prototype={
	list_search:function(list,search){
		search=search.toLowerCase();
		if(list.substring){
			return list.toLowerCase()==search;
		}else if($.isArray(list)){
			for(var i=0;i<list.length;i++){
				if(this.list_search(list[i],search))
					return true;
			};
			return false;
		}else
			return list==search;
	},
	set_row_clear_size:function(size){
		this.row_clear_size=size;
		return this;
	},
	set_ui_count:function(set){
		this.container_count=set;
		return this;
	},
	set_ui_paging:function(set){
		this.container_paging=set;
		this.container_paging_original=set.html();
		return this;
	},
	set_ui_nextpage:function(set){
		var self=this;
		(this.ui_nextpage=set).click(function(){
			self.set_page(self.view_page+1);
			return false;
		})
		return this;
	},
	set_ui_prevpage:function(set){
		var self=this;
		(this.ui_prevpage=set).click(function(){
			self.set_page(self.view_page-1);
			return false;
		})
		return this;
	},
	set_ui_showmore:function(set,effect){
		var self=this;
		(this.ui_show_more=set).click(function(){
			self.show_more(effect);
			return false;
		})
		return this;
	},
	set_message_empty:function(message){
		this.message_empty=message;
		return this;
	},
	set_pagesize:function(size,effect){
		if(effect===undefined)
			effect=true;

		if(size!=this.view_size){
			this.view_page=0;
			this.view_size=size;
			this.display(this.displayed&&effect);
		}
		return this;
	},
	set_page:function(page,effect){
		if(effect===undefined)
			effect=true;
			
		if(this.view_page!=page){
			this.view_page=page;
			this.display(effect);
		}
		return this;
	},
	show_more:function(effect){
		if(effect==undefined)
			effect=true;

		this.view_page++;
		this.display(effect,true);

		return this;
	},
	reset:function(){
		this.view_page=0;
		this.product_visible=this.product.slice();
		return this;
	},
	filter_tags:function(tags){
		if(tags.length){
			var visible=[];
			if(tags instanceof Array){
				for(var i=0;i<this.product_visible.length;i++){
					var found=false;
					for(var i2=0;i2<tags.length;i2++){
						if($.inArray(tags[i2],this.product_visible[i].tags)>=0){
							found=true;
							break;
						}
					}
					if(found)
						visible.push(this.product_visible[i]);
				}
			}else{
				for(var i=0;i<this.product_visible.length;i++){
					if($.inArray(tags,this.product_visible[i].tags)>=0)
						visible.push(this.product_visible[i]);
				}
			}
			this.product_visible=visible;
		}
		return this;
	},
	filter_collection:function(collections){
		if(collections.length){
			var visible=[];
			if(collections instanceof Array){
				for(var i=0;i<this.product_visible.length;i++){
					var found=false;
					for(var i2=0;i2<collections.length;i2++){
						if($.inArray(collections[i2],this.product_visible[i].collections)>=0){
							found=true;
							break;
						}
					}
					if(found)
						visible.push(this.product_visible[i]);
				}
			}else{
				for(var i=0;i<this.product_visible.length;i++){
					if($.inArray(collections,this.product_visible[i].collections)>=0)
						visible.push(this.product_visible[i]);
				}
			}
			this.product_visible=visible;
		}
		return this;
	},
	filter_price:function(min,max){
		var visible=[];
		for(var i=0;i<this.product_visible.length;i++){
			var price=Math.floor(this.product_visible[i].price);
			if(price>=min&&(isNaN(max)||price<=max))
				visible.push(this.product_visible[i]);
		}
		this.product_visible=visible;
		return this;
	},
	filter_prices:function(prices){
		if(prices.length){
			if(!(prices instanceof Array))
				prices=[prices];

			var visible=[];

			for(var i=0;i<this.product_visible.length;i++){
				var price=Math.floor(this.product_visible[i].price);
				for(var i2=0;i2<prices.length;i2++){
					if(price>=prices[i2].min&&(isNaN(prices[i2].max)||price<=prices[i2].max)){
						visible.push(this.product_visible[i]);
						break;
					}
				}
			}

			this.product_visible=visible;
		}
		return this;
	},
	filter_price_human:function(text){
		var match = true;
		var min = false;
		var max = false;
		
		text = text.replace(/,/g,'');

		if(match=text.match(/(?:up\s+to|<)\s*[Â£|â‚¬|$]?\s*(\d+.?\d*)/i)){
			min = 0;
			max = parseFloat(match[1]);
		}else if(match=text.match(/(\d+.?\d*)\s*(?:-|to)\s*[Â£|â‚¬|$]?\s*(\d+.?\d*)/i)){
			min = parseFloat(match[1]);
			max = parseFloat(match[2]);
		}else if(match=text.match(/(\d+.?\d*)/)){
			min = parseFloat(match[1]);
		}

		if(match!==false){
			this.filter_price(min,max);
		}
	},
    filter_data_values:function(name,values){
      if(values instanceof RegExp){
  
        var visible=[];
  
        for(var i=0;i<this.product_visible.length;i++){
          if(this.product_visible[i].element.data(name).match(values))
            visible.push(this.product_visible[i]);
        }
  
        this.product_visible=visible;
  
      }else if(values.length){
  
        var visible=[];
  
        if(!(values instanceof Array))
          values=[values];
  
        for(var i=0;i<this.product_visible.length;i++){
          if($.inArray(this.product_visible[i].element.data(name),values)>=0)
            visible.push(this.product_visible[i]);
        }
  
        this.product_visible=visible;
  
      }
      return this;
    },
	filter_types:function(types){
		if(types.length){
			if(!(types instanceof Array))
				types=[types];

			var visible=[];

			for(var i=0;i<this.product_visible.length;i++){
				if($.inArray(this.product_visible[i].type,types)>=0)
					visible.push(this.product_visible[i]);
			}

			this.product_visible=visible;
		}
		return this;
	},
	filter_vendors:function(vendors){
		if(vendors.length){
			if(!(vendors instanceof Array))
				vendors=[vendors];

			var visible=[];

			for(var i=0;i<this.product_visible.length;i++){
				if($.inArray(this.product_visible[i].vendor,vendors)>=0)
					visible.push(this.product_visible[i]);
			}

			this.product_visible=visible;
		}
		return this;
	},
	filter_property:function(property,value,customsearch){
		if(property){
			value=value.toLowerCase();
			var visible=[];
			for(var i=0;i<this.product_visible.length;i++){
				if(customsearch){
					if(customsearch(this.product_visible[i][property],value))
						visible.push(this.product_visible[i]);
				}else{
					if(this.list_search(this.product_visible[i][property],value))
						visible.push(this.product_visible[i]);
				}
			}
			this.product_visible=visible;
		}
	},
	price_count:function(min,max){
		var count=0;
		for(var i=0;i<this.product.length;i++){
			var price=Math.floor(this.product[i].price);
			if(price>=min&&(isNaN(max)||price<=max))
				count++;
		}
		return count;
	},
	tag_count:function(tag){
		var count=0;
		for(var i=0;i<this.product.length;i++){
			if($.inArray(tag,this.product[i].tags)>=0)
				count++;
		}
		return count;
	},
	tag_count_visible:function(tag){
		var count=0;
		for(var i=0;i<this.product_visible.length;i++){
			if($.inArray(tag,this.product_visible[i].tags)>=0)
				count++;
		}
		return count;
	},
	collection_count:function(collection){
		var count=0;
		for(var i=0;i<this.product.length;i++){
			if($.inArray(collection,this.product[i].tags)>=0)
				count++;
		}
		return count;
	},
	collection_count_visible:function(collection){
		var count=0;
		for(var i=0;i<this.product_visible.length;i++){
			if($.inArray(collection,this.product_visible[i].tags)>=0)
				count++;
		}
		return count;
	},
	list_types:function(){
		var list=[];
		for(var i=0;i<this.product.length;i++)
			if($.inArray(this.product[i].type,list)<0)list.push(this.product[i].type);
		return list;
	},
	vendor_count:function(vendor){
		vendor=vendor.toLowerCase();
		
		var count=0;
		for(var i=0;i<this.product.length;i++){
			if(this.product[i].vendor.toLowerCase()==vendor)
				count++;
		}
		return count;
	},
	vendor_count_visible:function(vendor){
		vendor=vendor.toLowerCase();
		
		var count=0;
		for(var i=0;i<this.product_visible.length;i++){
			if(this.product_visible[i].vendor.toLowerCase()==vendor)
				count++;
		}
		return count;
	},
	type_count:function(type){
		type=type.toLowerCase();
		
		var count=0;
		for(var i=0;i<this.product.length;i++){
			if(this.product[i].type.toLowerCase()==type)
				count++;
		}
		return count;
	},
	type_count_visible:function(type){
		type=type.toLowerCase();
		
		var count=0;
		for(var i=0;i<this.product_visible.length;i++){
			if(this.product_visible[i].type.toLowerCase()==type)
				count++;
		}
		return count;
	},
	property_count:function(property,value,customsearch){
		value=value.toLowerCase();
		
		var count=0;
		for(var i=0;i<this.product.length;i++){
			if(customsearch){
				if(customsearch(this.product[i][property],value))
					count++;
			}else if(this.list_search(this.product[i][property],value))
				count++;
		}
		return count;
	},
	property_count_visible:function(property,value,customsearch){
		value=value.toLowerCase();
		
		var count=0;
		for(var i=0;i<this.product_visible.length;i++){
			if(customsearch){
				if(customsearch(this.product_visible[i][property],value))
					count++;
			}else if(this.list_search(this.product_visible[i][property],value))
				count++;
		}
		return count;
	},

	list_vendors:function(){
		var list=[];
		for(var i=0;i<this.product.length;i++)
			if($.inArray(this.product[i].vendor,list)<0)list.push(this.product[i].vendor);
		return list;
	},
	list_types:function(){
		var list=[];
		for(var i=0;i<this.product.length;i++)
			if($.inArray(this.product[i].type,list)<0)list.push(this.product[i].type);
		return list;
	},
	list_property:function(property){
		var list=[];
		for(var i=0;i<this.product.length;i++){
			if($.isArray(this.product[i][property]))
				for(var i2=0;i2<this.product[i][property].length;i2++){
					if($.inArray(this.product[i][property][i2],list)<0)
						list.push(this.product[i][property][i2]);
				}
			else if($.inArray(this.product[i][property],list)<0)
				list.push(this.product[i][property]);
		}
		return list;
	},
	sort:function(name,sort){
		if(this.sort_name!=name){
			this.sort_name=name;
			this.product_visible.sort(sort);
			this.set_page(0);
		}
		return this;
	},
	sort_tagged:function(tag){
		this.sort('tagged '+tag,function(a,b){
			return ($.inArray(tag,b.tags)>=0?1:0)-($.inArray(tag,a.tags)>=0?1:0);
		});
		return this;
	},
	sort_new:function(){
		this.sort('new',function(a,b){
			return (b.is_new?1:0)-(a.is_new?1:0);
		});
		return this;
	},
	sort_price_low:function(){
		this.sort('low',function(a,b){
			return a.price-b.price;
		});
		return this;
	},
	sort_price_high:function(){
		this.sort('high',function(a,b){
			return b.price-a.price;
		});
		return this;
	},
	sort_alphabet_low:function(){
		this.sort('az_low', function(a,b) {
			var title_a = a.title.toLowerCase(), title_b = b.title.toLowerCase();
			if(title_a < title_b) {
				return -1;
			} 
			if(title_a > title_b) {
				return 1;
			}
			return 0;
		});
		return this;
	},
	sort_alphabet_high:function(){
		this.sort('az_high', function(a,b) {
			var title_a = a.title.toLowerCase(), title_b = b.title.toLowerCase();
			if(title_a > title_b) {
				return -1;
			} 
			if(title_a < title_b) {
				return 1;
			}
			return 0;
		});
		return this;
	},
	sort_datetime_low:function(){
		this.sort('datetime_low', function(a,b) {
			if(a.date < b.date) {
				return -1;
			} 
			if(a.date > b.date) {
				return 1;
			}
			return 0;
		});
		return this;
	},
	sort_datetime_high:function(){
		this.sort('datetime_high', function(a,b) {
			if(a.date > b.date) {
				return -1;
			} 
			if(a.date < b.date) {
				return 1;
			}
			return 0;
		});
		return this;
	},
	ui_filter_refresh:function(animate){
		if(animate==undefined)
			animate=true;

		this.reset();
		for(var i=0;i<this.ui_filter_tag.length;i++){
			var tag=this.ui_filter_tag[i];
			var value=tag.attr('value');value=$.trim(value==undefined?tag.text():value);
			if(value.length)
				this.filter_tags(value);
		}
		for(var i=0;i<this.ui_filter_tag.length;i++){
			var tag=this.ui_filter_collection[i];
			var value=tag.attr('value');value=$.trim(value==undefined?tag.text():value);
			if(value.length)
				this.filter_collection(value);
		}
		for(var i=0;i<this.ui_filter_vendor.length;i++){
			var tag=this.ui_filter_vendor[i];
			var filter=[];

			if($tag.is('select')){
				var value = $tag.attr('value');
				value = $.trim(value==undefined?$tag.text():value);
				if(value){
					filter.push(value);
				}
			}else{
				$tag.find('input:checkbox:checked').each(function(){
					var name = $.trim($(this).attr('name')||'');
					if(name){
						filter.push(name);
					}
				});
			}
			if(filter.length)
				this.filter_vendors(filter);
		}
		for(var i=0;i<this.ui_filter_type.length;i++){
			var $tag=this.ui_filter_type[i];
			var filter=[];
			if($tag.is('select')){
				var value = $tag.attr('value');
				value = $.trim(value==undefined?$tag.text():value);
				if(value){
					filter.push(value);
				}
			}else{
				$tag.find('input:checkbox:checked').each(function(){
					var name = $.trim($(this).attr('name')||'');
					if(name){
						filter.push(name);
					}
				});
			}
			if(filter.length)
				this.filter_types(filter);
		}
		for(var i=0;i<this.ui_filter_price.length;i++){
			var tag=this.ui_filter_price[i];

			var min = tag.data('price-min');
			var max = tag.data('price-max');

			this.filter_price(0,parseInt(match[1]));

			if(min!=undefined){
				this.filter_price(min,max);
			}
		}
		for(var i=0;i<this.ui_filter_property.length;i++){
			var tag=this.ui_filter_property[i].element;
			var property=this.ui_filter_property[i].property;
			var customsearch=this.ui_filter_property[i].customsearch;
			var value=tag.attr('value');value=$.trim(value==undefined?tag.text():value);
			if(value.length)
				this.filter_property(property,value,customsearch);
		}
		this.display(true);
		return this;
	},
	add_filter_tag:function($select){
		var self=this;
		$select.children().each(function(){
			var value=$(this).attr('value');value=$.trim(value==undefined?$(this).text():value);
			if(value.length&&!self.tag_count(value))
				$(this).remove();
		});
		this.ui_filter_tag.push($select);
		$select.change(function(){
			self.ui_filter_refresh();
		});
		this.ui_filter_refresh(false);
		return this;
	},
	add_filter_collection:function($select){
		var self=this;
		$select.children().each(function(){
			var value=$(this).attr('value');value=$.trim(value==undefined?$(this).text():value);
			if(value.length&&!self.collection_count(value))
				$(this).remove();
		});
		this.ui_filter_collection.push($select);
		$select.change(function(){
			self.ui_filter_refresh();
		});
		this.ui_filter_refresh(false);
		return this;
	},
	add_filter_vendor:function($selector,autofill){
		var self=this;
		if($selector.is('select')){
			$selector.children().each(function(){
				var value=$(this).attr('value');value=$.trim(value==undefined?$(this).text():value);
				if(value.length&&!self.type_count(value))
					$(this).remove();
			});
			if(autofill){
				var types=this.list_types();
				for(var i=0;i<types.length;i++){
					var $option=$('<option />');
					$option
						.attr('value',types[i])
						.text(types[i])
					;
					$selector.append($option);
				}
			}
		}
		this.ui_filter_vendor.push($selector);
		$selector.change(function(){
			self.ui_filter_refresh();
		}).find('input:checkbox').change(function(){
			self.ui_filter_refresh();
		});
		this.ui_filter_refresh(false);
		return this;
	},
	add_filter_type:function($selector,autofill){
		var self=this;
		if($selector.is('select')){
			$selector.children().each(function(){
				var value=$(this).attr('value');value=$.trim(value==undefined?$(this).text():value);
				if(value.length&&!self.type_count(value))
					$(this).remove();
			});
			if(autofill){
				var types=this.list_types();
				for(var i=0;i<types.length;i++){
					var $option=$('<option />');
					$option
						.attr('value',types[i])
						.text(types[i])
					;
					$selector.append($option);
				}
			}
		}
		this.ui_filter_type.push($selector);
		$selector.change(function(){
			self.ui_filter_refresh();
		}).find('input:checkbox').change(function(){
			self.ui_filter_refresh();
		});
		this.ui_filter_refresh(false);
		return this;
	},
	add_filter_price:function($select){
		var self=this;
		$select.children().each(function(){
			var value=$(this).attr('value');value=$.trim(value==undefined?$(this).text():value).replace(/,/g,'');
			if(value){
				var found = false;
				var match = true;
				var min = false;
				var max = false;

				if(match=value.match(/(?:up\s+to|<)\s*[Â£|â‚¬|$]?\s*(\d+.?\d*)/i)){
					min = 0;
					max = parseInt(match[1]);
				}else if(match=value.match(/(\d+.?\d*)\s*(?:-|to)\s*[Â£|â‚¬|$]?\s*(\d+.?\d*)/i)){
					min = parseInt(match[1]);
					max = parseInt(match[2]);
				}else if(match=value.match(/(\d+.?\d*)/)){
					min = parseInt(match[1]);
				}

				if(!match)
					$(this).remove();
				else{
					match = self.price_count(min,max);
					if(match&&min!==false)
						$(this).data('price-min',min).data('price-max',max);
					else
						$(this).remove();
				}
			}
		});
		this.ui_filter_price.push($select);
		$select.change(function(){
			self.ui_filter_refresh();
		});
		this.ui_filter_refresh(false);
		return this;
	},
	add_filter_property:function($select,property,autofill,customsearch){
		var self=this;
		$select.children().each(function(){
			var value=$(this).attr('value');value=$.trim(value==undefined?$(this).text():value);
			if(value.length&&!self.property_count(property,value,customsearch))
				$(this).remove();
		});
		if(autofill){
			var list=this.list_property(property);
			for(var i=0;i<list.length;i++){
				var $option=$('<option />');
				$option
					.attr('value',list[i])
					.text(list[i])
				;
				$select.append($option);
			}
		}
		this.ui_filter_property.push({property:property,element:$select,customsearch:customsearch});
		$select.change(function(){
			self.ui_filter_refresh();
		});
		this.ui_filter_refresh(false);
		return this;
	},

	display:function(effect,append){
		if(this.container_count){
			this.container_count.find('.start').text(this.view_page*this.view_size+1);
			this.container_count.find('.end').text(Math.min((this.view_page+1)*this.view_size-1+1,this.product_visible.length));
			this.container_count.find('.count').text(this.product_visible.length);
		}

		var page_count=Math.ceil(this.product_visible.length/this.view_size);
		if(this.container_paging)
			this.container_paging.html(this.container_paging_original);

		if(this.ui_prevpage){
			if(this.view_page>0)
				this.ui_prevpage.show();
			else
				this.ui_prevpage.hide();
		}
		if(this.ui_nextpage){
			if(this.view_page<page_count-1)
				this.ui_nextpage.show();
			else
				this.ui_nextpage.hide();
		}
		if(this.ui_show_more){
          if(this.view_page<page_count-1) {
            $('.async-load').show();
				this.ui_show_more.show();
          } else {
			this.ui_show_more.hide();
            $('.async-load').hide();
          }
		}

		for(var page=0;page<page_count;page++){
			if(page==this.view_page){
				if(this.container_paging)
					this.container_paging.append('<span class="page current">'+(this.view_page+1)+'</span>');
			}else{
				var item=$('<a href="#">'+(page+1)+'</a>');
				var self=this;
				(function(page){
					item.click(function(){
						self.set_page(page);
						return false;
					});
				})(page);
				if(this.container_paging){
					var wrap=$('<span class="page"></span>');
					wrap.append(item);
					this.container_paging.append(wrap);
				}
			}
		}
		if(this.container_paging){
			if(page_count>1)
				this.container_paging.show();
			else
				this.container_paging.hide();
		}

		if(!append){
			if(this.options.mode=='hide')
				this.container.children().hide();
			else
				this.container.children().detach();
		}

		var count_old=this.container.children(this.options.mode=='hide'?':visible':undefined).length;

		var count=0;
		if(this.product_visible.length){
			for(var I=this.view_size*this.view_page;I<this.view_size*(this.view_page+1)&&I<this.product_visible.length;I++){
				var product=this.product_visible[I];

				product.element.find('img[data-url-delayed]').each(function(){$(this).attr('src',$(this).data('url-delayed')).removeData('url-delayed');});
				
				this.container.append(product.element.show());
				count++;
			}
		}

		if(!append&&!count)
			this.container.append(this.message_empty);

		if(effect){
			//animate the items appearing
			this.container.children(this.options.mode=='hide'?':visible':undefined).slice(count_old).each(function(i){
				$(this).stop(true).css({opacity:0}).delay(Math.min(i*100,1000)).fadeTo(400,1);
			});
			//this.container.stop(true).css({opacity:0}).animate({opacity:1},600);
			/*this.container.children().slice(count_old).stop(true,true).css({opacity:0}).each(function(index){
				$(this).delay(index*200).animate({opacity:1},1500);
			});*/
		}

		//Finally apply any global page mods here (like js currency adjustments etc
		
		this.displayed = true;

		return this;
	}
};

var filters = {
  // arrays to populate with avaliable filter options
  colours: [],
  materials: [],
  styles: [],
  recommended: [],
  
  // elements to populate with options
  coloursElement: '#filter-colours',
  materialsElement: '#filter-materials',
  stylesElement: '#filter-styles',
  recommendedElement: '#filters-recommended',
  priceElement: '#price-sort',
  paginateElement: '#paginate-sort',
  
  // populate the arrays
  populateLists: function(lists) {
    for(var i=0; i<lists.colours.length; i++) {
      // push the item to the array after checking that it's not empty and not already in the array
      if(lists.colours[i] && this.colours.indexOf(lists.colours[i])<0)
         this.colours.push(lists.colours[i]);
      if(lists.materials[i] && this.materials.indexOf(lists.materials[i])<0) 
      	this.materials.push(lists.materials[i]);
      if(lists.styles[i] && this.styles.indexOf(lists.styles[i])<0) 
  	  	this.styles.push(lists.styles[i]);
  	  if(lists.recommended[i] && this.recommended.indexOf(lists.recommended[i])<0) 
  	  	this.recommended.push(lists.recommended[i]);
    }
  },
  
  populateElements: function() {
    var formattedColours,
        formattedMaterials,
    	formattedStyles,
    	formattedRecommended
    	;
    
    // format the arrays in to show as html elements
    formattedColours = this.colours.map(function(val) {
    	return '<div class="row cf">'+
                  '<input type="checkbox" name="'+val+'" value="" id="'+val+'" />'+
                  '<span style="background: '+val+'" class="color-sample"></span>'+
                  '<label for="'+val+'">'+val+'</label>'+
               '</div>';
    });
    formattedMaterials = this.materials.map(function(val) {
    	return '<div class="row cf">'+
                  '<input type="checkbox" name="'+val+'" value="" id="'+val+'" />'+  
                  '<label for="'+val+'">'+val+'</label>'+
               '</div>';
    });
    formattedStyles = this.styles.map(function(val) {
    	return '<div class="row cf">'+
                  '<input type="checkbox" name="'+val+'" value="" id="'+val+'" />'+    
                  '<label for="'+val+'">'+val+'</label>'+
               '</div>';
    });
    formattedRecommended = this.recommended.map(function(val) {
    	return '<div class="row cf">'+
                  '<input type="checkbox" name="'+val+'" value="" id="'+val+'" />'+    
                  '<label for="'+val+'">'+val+'</label>'+
               '</div>';
    });

    // add the elements to the DOM
    $(this.coloursElement).append(formattedColours.join(''));
    $(this.materialsElement).append(formattedMaterials.join(''));
    $(this.stylesElement).append(formattedStyles.join(''));
    $(this.recommendedElement).append(formattedRecommended.join(''));
  },
  
  // filter value storage
  sort: false,
  priceMin: false,
  priceMax: false,
  paginate: '30',
  
  // add a ticked filter option to the filter by list
  addMatch: function(matchList, $elem) {
    if(matchList)matchList += '|';
    matchList += $elem.attr('name').toString().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,'\\$&');
    return matchList;
  },
  
  // filter and display
  resort: function() {
  	collection.reset();
    
    var coloursMatch = '',
        materialsMatch = '',
        stylesMatch = '',
        recommendedMatch = ''
    	;
    
    // set pagination
    collection.set_pagesize(this.paginate);
    
    // filter prices
    if(this.priceMin !== false)
      collection.filter_price(this.priceMin, this.priceMax);
    
    switch(this.sort) {
      case 'price-low':
        collection.sort_price_low();
        break;
      case 'price-high':
        collection.sort_price_high();
        break;
    }
    
    // find selected options
    $(this.coloursElement + ' input[type=checkbox]:checked').each(function(){
      coloursMatch = filters.addMatch(coloursMatch, $(this));
    });
    $(this.materialsElement + ' input[type=checkbox]:checked').each(function(){
      materialsMatch = filters.addMatch(materialsMatch, $(this));
    });
    $(this.stylesElement + ' input[type=checkbox]:checked').each(function(){
      stylesMatch = filters.addMatch(stylesMatch, $(this));
    });
    $(this.recommendedElement + ' input[type=checkbox]:checked').each(function(){
      recommendedMatch = filters.addMatch(recommendedMatch, $(this));
    });

    // filter by selected options
    if(coloursMatch)
      collection.filter_data_values('colours',new RegExp('\\b('+coloursMatch+')\\b','i'));
    if(materialsMatch)
      collection.filter_data_values('materials',new RegExp('\\b('+materialsMatch+')\\b','i'));
    if(stylesMatch)
      collection.filter_data_values('styles',new RegExp('\\b('+stylesMatch+')\\b','i'));
    if(recommendedMatch)
      collection.filter_data_values('tags',new RegExp('\\b('+recommendedMatch+')\\b','i'));
    
    collection.display(true);
  }
};