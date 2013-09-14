(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['row'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n	<div class=\"span3\">\n		<input type=\"text\" class=\"input-block-level\" placeholder=\"Timecode\" name=\"";
  if (stack1 = helpers.timecode_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.timecode_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (stack1 = helpers.timecode_value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.timecode_value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n		<input type=\"hidden\" name=\"";
  if (stack1 = helpers.timecode_absolute_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.timecode_absolute_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (stack1 = helpers.timecode_absolute_value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.timecode_absolute_value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	</div> \n	<div class=\"span8\">\n		<input type=\"text\" class=\"input-block-level\" placeholder=\"Please enter a description...\" name=\"";
  if (stack1 = helpers.text_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" value=\"";
  if (stack1 = helpers.text_value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text_value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	</div> \n	<div class=\"span1\"> \n		<a href=\"#\" title=\"delete this entry\" class=\"icon-remove icon-2x delete\" id=\"";
  if (stack1 = helpers.remove_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.remove_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"> </a> \n	</div> \n</div>";
  return buffer;
  });
})();