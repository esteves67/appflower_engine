// create namespace for plugins
/**
 * Different from Extjs-2 Version
 */

Ext.namespace('Ext.ux.plugins');
Ext.ux.plugins.HelpText = {
    init: function(container){
        Ext.apply(container, {
            onRender: container.onRender.createSequence(function(ct, position){
                // if there is helpText create a div and display the text below the field
                if (typeof this.helpText == 'string') {														
	                switch (this.helpType)
	                {
	                	case "comment":                
			                this.wrap = this.wrap || this.el.wrap();
		                	var ins = this.el.dom;
		                	ins = this.wrap.dom;
		                    Ext.DomHelper.append(ins.parentNode,{
		                        tag: 'div',
		                        cls: typeof this.helpTextClass != 'undefined' ? this.helpTextClass : '',
		                        style: typeof this.helpTextStyle != 'undefined' ? this.helpTextStyle : 'clear: right; font-size: 11px; color: #888888;',
		                        html: this.helpText
		                    });
			            break;						
			            
			            case "inline":
							var el = this.getEl();
							var enc = el.findParent('.x-form-item');
							if(enc){
								var els = Ext.select('label',true,enc);								
								label = els.elements[0];
							}							
							var style="padding-left:2px;";
							if(!label) break;
			            	switch(this.xtype)
			            	{
			            		case "radio":			            			
			            			label = els.elements[1];
			            			break;
			            		default:			            			
			            			var style="padding-right:2px;float:left";
			            			break;
			            	}			            	
			            	this.helpText = (this.helpText+'').replace(/[\\"']/g, '\'');
			            	Ext.DomHelper.insertFirst(label,{
		                        tag: 'span',
		                        style: style,
		                        html: '<img src="/appFlowerPlugin/images/help.png" qtip="'+this.helpText+'">'
		                    });
			            break;
	                }
                }
                
            }),// end of function onRender
            findByClassName: function(div,className){
        		var curDiv;
        		while(curDiv = div.parentNode){
        			if(curDiv.className.match(className)){
        				return curDiv
        			}
        			div = curDiv;
        		}
        		return false;
        	}
        });
        
    } // end of function init
};
Ext.ux.plugins.HelpText = Ext.extend(Ext.ux.plugins.HelpText, Ext.util.Observable);
// end of file