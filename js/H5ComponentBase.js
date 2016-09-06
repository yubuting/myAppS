/*H5ComponentBase.js*/
var H5ComponentBase = function (name,cfg){
	var cfg = cfg ||{};
	var id =('h5_c_'+Math.random()).replace('.','_');
	var cls = 'h5_component_'+cfg.type+' h5_component_name_'+name;
	var component = $('<div class="h5_component  '+cls+'" id="'+id+'">');
	cfg.text && component.text(cfg.text);
	return component;
}