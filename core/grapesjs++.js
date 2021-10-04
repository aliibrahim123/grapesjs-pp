var ddq;
var ddw;
var styleManagersectors = [{
              name: 'General',
              buildProps: ['float', 'display', 'top', 'right', 'left', 'bottom'],
              properties:[{
                  name: 'Alignment',
                  property: 'float',
                  type: 'radio',
                  defaults: 'none',
                  list: [
                    { value: 'none', className: 'fa fa-times'},
                    { value: 'left', className: 'fa fa-align-left'},
                    { value: 'right', className: 'fa fa-align-right'}
                  ],
                },
                { property: 'position',
				  type: 'select',
				  name: 'position',
				  list: [
				  {name: 'static', value: 'static'},
				  {name: 'absolute', value: 'absolute'},
				  {name: 'fixed', value: 'fixed'},
				  {name: 'relative', value: 'relative'},
				  {name: 'sticky', value: 'sticky'},
]},
				{
                  name: 'display',
                  property: 'display',
                  type: 'select',
                  defaults: 'none',
                  list: [{value: 'inline', name: 'inline'},
					{value: 'block', name: 'block'},
					{value: 'contents', name: 'contents'},
					{value: 'flex', name: 'flex'},
					{value: 'grid', name: 'grid'},
					{value: 'inline-block', name: 'inline-block'},
					{value: 'inline-flex', name: 'inline-flex'},
					{value: 'inline-grid', name: 'inline-grid'},
					{value: 'inline-table', name: 'inline-table'},
					{value: 'list-it%', name: 'list-it%'},
					{value: 'run-in', name: 'run-in'},
					{value: 'table', name: 'table'},
					{value: 'table-caption', name: 'table-caption'},
					{value: 'table-column-group', name: 'table-column-group'},
					{value: 'table-header-group', name: 'table-header-group'},
					{value: 'table-footer-group', name: 'table-footer-group'},
					{value: 'table-row-group', name: 'table-row-group'},
					{value: 'table-cell', name: 'table-cell'},
					{value: 'table-column', name: 'table-column'},
					{value: 'table-row', name: 'table-row'},
					{value: 'none', name: 'none'},
					{value: 'initial', name: 'initial'},
					{value: 'inherit', name: 'inherit'},],
                }
              ],
            },{
                name: 'Dimension',
                open: false,
                buildProps: ['width', 'flex-width', 'height', 'max-width', 'min-height', 'margin', 'padding', 'overflow', 'overflow-x', 'overflow-y'],
                properties: [{
                  id: 'flex-width',
                  type: 'integer',
                  name: 'Width',
                  units: ['px', '%'],
                  property: 'flex-basis',
                  toRequire: 1,
                },{
                  property: 'margin',
                  properties:[
                    { name: 'Top', property: 'margin-top'},
                    { name: 'Right', property: 'margin-right'},
                    { name: 'Bottom', property: 'margin-bottom'},
                    { name: 'Left', property: 'margin-left'}
                  ],
                },{
                  property  : 'padding',
                  properties:[
                    { name: 'Top', property: 'padding-top'},
                    { name: 'Right', property: 'padding-right'},
                    { name: 'Bottom', property: 'padding-bottom'},
                    { name: 'Left', property: 'padding-left'}
                  ],
                },{
				name: 'object fit',
                property: 'object-fit',
				type: 'select',
				list: [{value: 'fill', name: 'fill'},
				{value: 'contain', name: 'contain'},
				{value: 'cover', name: 'cover'},
				{value: 'scale-down', name: 'scale down'},
                ]},{
				name: 'object position',
                property: 'object-position',
				type: 'composite',
				properties: [{
				name: 'x',
				property: 'jcdsc',
				type: 'integer',
				units : ['px', '%']
				},{
				name: 'y',
				property: 'hdjw',
				type: 'integer',
				units : ['px', '%']
				}, 
                ]},],
              },{
                name: 'Typography',
                open: false,
                buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration', 'text-shadow'],
                properties:[
                  { name: 'Font', property: 'font-family'},
                  { name: 'Weight', property: 'font-weight'},
                  { name:  'Font color', property: 'color'},
				  {
				name: 'font stretch',
				property: 'font-stretch',
				type: 'select',
				list: [
				{name: 'ultra condensed', value: 'ultra-condensed'},
				{name: 'extra condensed', value: 'extra-condensed'},
				{name: 'condensed', value: 'condensed'},
				{name: 'semi condensed', value: 'semi-condensed'},
				{name: 'normal', value: 'normal'},
				{name: 'semi expanded', value: 'semi-expanded'},
				{name: 'expanded', value: 'expanded'},
				{name: 'extra expanded', value: 'extra-expanded'},
				{name: 'ultra expanded', value: 'ultra-expanded'},
				]},{
				name: 'font variant',
				property: 'font-variant',
				type: 'select',
				list: [
				{name: 'normal', value: 'normal'},
				{name: 'small caps', value: 'small-caps'},
				]},
				
                  {
                    property: 'text-align',
                    type: 'radio',
                    defaults: 'left',
                    list: [
                      { value : 'left',  name : 'Left',    className: 'fa fa-align-left'},
                      { value : 'center',  name : 'Center',  className: 'fa fa-align-center' },
                      { value : 'right',   name : 'Right',   className: 'fa fa-align-right'},
                      { value : 'justify', name : 'Justify',   className: 'fa fa-align-justify'}
                    ],
                  },{
                    property: 'text-decoration',
                    type: 'composite',
					name: 'text decoration',
                    properties: [
                      {
                    property: 'text-decoration',
                    type: 'radio',
                    defaults: 'none',
                    list: [
                      { value: 'overline', name: 'overline',},
                      { value: 'underline', name: 'underline', className: 'fa fa-underline' },
                      { value: 'line-through', name: 'Line-through', className: 'fa fa-strikethrough'}
                    ],
                  },{
                    property: 'dwf',
					name: 'color',
                    type: 'color',
                    
                  },{
                    property: 'wncjjqjw',
                    type: 'select',
					name: 'style',
                    list: [
                      { value: 'solid', name: 'solid',},
                      { value: 'double', name: 'double',},
					  { value: 'dotted', name: 'dotted',},
					  { value: 'dashed', name: 'dashed',},
					  { value: 'wavy', name: 'wavy',},
                    ],
                  },
                    ],
                  },{
					 name: 'text indent',
                    property: 'text-indent',
                    type: 'integer',
                    units: ['px', 'em', 'rem', '%']
                  },{
					 name: 'direction',
                    property: 'direction',
                    type: 'radio',
                    
                    list: [
                      
                      { value: 'rtl', name: 'right to left'},
                      { value: 'ltr', name: 'left to right'}
                    ],
                  },{
					 name: 'writing mode',
                    property: 'writing-mode',
                    type: 'select',
                    
                    list: [
                      
                      { value: 'horizontal-tb', name: 'horizontal top to bottom'},
                      { value: 'vertical-rl', name: 'vertical right to lift'},
					  { value: 'vertical-lr', name: 'vertical left to right'},
                    ],
                  },{
					 name: 'text transform',
                    property: 'text-transform',
                    type: 'radio',
                    
                    list: [
                      
                      { value: 'none', name: 'none'},
                      { value: 'capitalize', name: 'capitalize'},
					  { value: 'uppercase', name: 'uppercase'},
					  { value: 'lowercase', name: 'lowercase'},
                    ],
                  },{
                    property: 'text-shadow',
                    properties: [
                      { name: 'X position', property: 'text-shadow-h'},
                      { name: 'Y position', property: 'text-shadow-v'},
                      { name: 'Blur', property: 'text-shadow-blur'},
                      { name: 'Color', property: 'text-shadow-color'}
                    ],
                }],
              },{
				name: 'Typography advance',
				open: false,
				properties: [{
				name: 'font feature settings',
				property: 'font-feature-settings',
				type: '',
				},{
			    name: 'font kerning',
                property: 'font-kerning',
                type: 'radio',
                list: [
                      { value: 'auto', name: 'auto'},
                      { value: 'normal', name: 'normal'}
                    ],
                },{
				name: 'font size adjust',
				property: 'font-size-adjust',
				type: 'integer',
				},{
				name: 'font language override',
				property: 'font-language-override',
				type: '',
				},{
				name: 'font synthesis',
				property: 'font-synthesis',
				type: '',
				},{
				name: 'font variant alternates',
				property: 'font-variant-alternates',
				type: '',
				},{
			    name: 'font variant caps',
                property: 'font-variant-caps',
                type: 'select',
                list: [
                      { value: 'small-caps', name: 'small caps'},
                      { value: 'normal', name: 'normal'},
					  { value: 'all-small-caps', name: 'all small caps'},
					  { value: 'petite-caps', name: 'petite caps'},
					  { value: 'all-petite-caps', name: 'all petite caps'},
					  { value: 'unicase', name: 'unicase'},
					  { value: 'titling-caps', name: 'titling caps'},
					  { value: 'unset', name: 'unset'},
					  { value: 'auto', name: 'auto'},
					  { value: 'auto', name: 'auto'},
					  { value: 'auto', name: 'auto'},
                    ],
                },{
				name: 'font variant east asian',
				property: 'font-variant-east-asian',
				type: '',
				},{
				name: 'font variant ligatures',
				property: 'font-variant-ligatures',
				type: '',
				},{
				name: 'font variant numeric',
				property: 'font-variant-numeric',
				type: '',
				},{
				name: 'font variant numeric',
				property: 'font-variant-numeric',
				type: '',
				},{
				name: 'tab size',
				property: 'tab-size',
				type: 'integer',
				},
				
				]
				  
			  },{
                name: 'Decorations',
                open: false,
                buildProps: ['opacity', 'box-shadow', 'background-color', 'background'],
                properties: [{
                  type: 'color',
                  property: 'caret-color',
                  name: 'caret color'
                },{
				name: 'cursor',
				property: 'cursor',
				type: 'select',
				list: [{ value: 'default', name: 'default', },
				{value: 'auto', name: 'auto', },
				{ value: 'none', name: 'none', },
				{ value: 'context-menu', name: 'context-menu', },
				{ value: 'help', name: 'help', },
				{ value: 'pointer', name: 'pointer', },
				{ value: 'progress', name: 'progress', },
				{ value: 'wait', name: 'wait', },
				{ value: 'cell', name: 'cell', },
				{ value: 'crosshair', name: 'crosshair', },
				{ value: 'text', name: 'text', },
				{ value: 'vertical-text', name: 'vertical-text', },
				{ value: 'alias', name: 'alias', },
				{ value: 'copy', name: 'copy', },
				{ value: 'move ', name: 'move ', },
				{ value: 'no-drop', name: 'no-drop',   },
				{ value: 'not-allowed', name: 'not-allowed', },
				{ value: 'all-scroll', name: 'all-scroll', },
				{ value: 'col-resize', name: 'col-resize', },
				{ value: 'row-resize', name: 'row-resize', },
				{ value: 'n-resize', name: 'n-resize', },
				{ value: 'e-resize', name: 'e-resize', },
				{ value: 's-resize', name: 's-resize', },
				{ value: 'w-resize', name: 'w-resize', },
				{ value: 'ns-resize', name: 'ns-resize', },
				{ value: 'ew-resize', name: 'ew-resize', },
				{ value: 'ne-resize', name: 'ne-resize', },
				{ value: 'nw-resize', name: 'nw-resize', },
				{ value: 'se-resize', name: 'se-resize', },
				{ value: 'sw-resize ', name: 'sw-resize ', },
				{ value: 'nesw-resize', name: 'nesw-resize', },
				{value: 'nwse-resize', name: 'nwse-resize',}]
				},{
                  type: 'slider',
                  property: 'opacity',
                  defaults: 1,
                  step: 0.01,
                  max: 1,
                  min:0,
                },{
                  property: 'box-shadow',
                  properties: [
                    { name: 'X position', property: 'box-shadow-h'},
                    { name: 'Y position', property: 'box-shadow-v'},
                    { name: 'Blur', property: 'box-shadow-blur'},
                    { name: 'Spread', property: 'box-shadow-spread'},
                    { name: 'Color', property: 'box-shadow-color'},
                    { name: 'Shadow type', property: 'box-shadow-type'}
                  ],
                },{
				name: 'clip path based on svg',
				property: 'clip-path',
				type: 'file',
				functionName: 'url'
				},{
				name: 'clip path based on',
				property: 'clip-path',
				type: 'select',
				list: [
				{name: 'margin box', value: 'margin-box'},
				{name: 'border box', value: 'border-box'},
				{name: 'padding box', value: 'padding-box'},
				{name: 'content box', value: 'content-box'},
				{name: 'fill box', value: 'fill-box'},
				{name: 'stroke box', value: 'stroke-box'},
				{name: 'view box', value: 'view-box'},
				
				]
				},{
				name: 'clip path',
				property: 'clip-path',
				type: '',
				
				},{
				name: 'list style',
				property: 'list-style',
				type: 'composite',
				properties: [
				{
				name: 'type',
				property: 'list-style-type',
				type: 'select',
				list: [
				{name: 'circle', value: 'circle',},
				{name: 'disc', value: 'disc',},
				{name: 'square', value: 'square'},
				{name: 'armenian', value: 'armenian'},
				{name: 'cjk-ideographic', value: 'cjk-ideographic'},
				{name: 'decimal', value: 'decimal'},
				{name: 'decimal-leading-zero', value: 'decimal-leading-zero'},
				{name: 'georgian', value: 'georgian'},
				{name: 'hebrew', value: 'hebrew'},
				{name: 'hiragana', value: 'hiragana'},
				{name: 'hiragana-iroha', value: 'hiragana-iroha'},
				{name: 'katakana', value: 'katakana'},
				{name: 'katakana-iroha', value: 'katakana-iroha'},
				{name: 'lower-alpha', value: 'lower-alpha'},
				{name: 'lower-greek', value: 'lower-greek'},
				{name: 'lower-latin', value: 'lower-latin'},
				{name: 'lower-roman', value: 'lower-roman'},
				{name: 'upper-alpha', value: 'upper-alpha'},
				{name: 'upper-greek', value: 'upper-greek'},
				{name: 'upper-latin', value: 'upper-latin'},
				{name: 'upper-roman', value: 'upper-roman'},
				{name: 'none', value: 'none'},

				]
				},{
				name: 'position',
				property: 'list-style-position',
				type: 'select',
				list: [
				{name: 'outside', value: 'outside',},
				{name: 'inside', value: 'inside',},
				
				]
				},{
				name: 'image',
				property: 'list-style-image',
				type: ''
				},
				],
              },{
                type: '',
                property: 'quotes',
                name: 'quotes'
                },{
				name: 'resize',
				property: 'resize',
				type: 'select',
				list: [
				{name: 'none', value: 'none'},
				{name: 'both', value: 'both'},
				{name: 'horizontal', value: 'horizontal'},
				{name: 'vertical', value: 'vertical'},
				
				
				]
				},
				
				],
              },{
                name: 'animation',
                open: false,
                properties: [{
				name: 'animation name',
				property: 'animation-name',
				type: '',
				},{
				name: 'animation duration',
				property: 'animation-duration',
				type: 'integer',
				units: ['s', "ms"],
					
				},{
				name: 'animation delay',
				property: 'animation-delay',
				type: 'integer',
				units: ['s', "ms"],
					
				},{
				name: 'animation-direction',
				property: 'animation-direction',
				type: 'select',
				list: [{value: 'normal',name: 'normal'},
				{value: 'reverse',name: 'reverse'},
				{value: 'alternate',name: 'alternate'},
				{value: 'alternate-reverse',name: 'alternate-reverse'},],	
				},{
				name: 'animation iteration count',
				property: 'animation-iteration-count',
				type: '',
			
				},{
				name: 'animation fill mode',
				property: 'animation-fill-mode',
				type: 'select',
				list: [{value: 'none',name: 'none'},
				{value: 'forwards',name: 'forwards'},
				{value: 'backwards',name: 'backwards'},
				{value: 'both',name: 'both'},],	
				},{
				name: 'animation timing function',
				property: 'animation-timing-function',
				type: 'select',
				list: [{value: 'linear',name: 'linear'},
				{value: 'ease',name: 'ease'},
				{value: 'ease-in',name: 'ease-in'},
				{value: 'ease-out',name: 'ease-out'},
				{value: 'ease-in-out',name: 'ease-in-out'},
				{value: 'step-start',name: 'step-start'},
				{value: 'step-end',name: 'step-end'},],	
				},
		
  ],
              },{
				 name: "border" ,
				 open: false,
				 properties:[{
				name: 'border all',
				property: 'border',
				type: 'composite',
				properties: [{
				name: 'border width',
				property: 'border-width',
				type: 'integer',
				units: ['px', '%']
				},{
				name: 'border style',
				property: 'border-style',
				type: 'select',
				list: [
				{name: 'none', value: 'none'},
				{name: 'hidden', value: 'hidden'},
				{name: 'dotted', value: 'dotted'},
				{name: 'dashed', value: 'dashed'},
				{name: 'solid', value: 'solid'},
				{name: 'double', value: 'double'},
				{name: 'groove', value: 'groove'},
				{name: 'ridge', value: 'ridge'},
				{name: 'inset', value: 'inset'},
				{name: 'outset', value: 'outset'},
				]
				},{
				name: 'border color',
				property: 'border-color',
				type: 'color',
				},
				
				]
				},{
				name: 'border bottom',
				property: 'border-bottom',
				type: 'composite',
				properties: [{
				name: 'border width',
				property: 'border-bottom-width',
				type: 'integer',
				units: ['px', '%']
				},{
				name: 'border style',
				property: 'border-bottom-style',
				type: 'select',
				list: [
				{name: 'none', value: 'none'},
				{name: 'hidden', value: 'hidden'},
				{name: 'dotted', value: 'dotted'},
				{name: 'dashed', value: 'dashed'},
				{name: 'solid', value: 'solid'},
				{name: 'double', value: 'double'},
				{name: 'groove', value: 'groove'},
				{name: 'ridge', value: 'ridge'},
				{name: 'inset', value: 'inset'},
				{name: 'outset', value: 'outset'},
				]
				},{
				name: 'border color',
				property: 'border-bottom-color',
				type: 'color',
				},
				
				]
				},{
				name: 'border left',
				property: 'border-left',
				type: 'composite',
				properties: [{
				name: 'border width',
				property: 'border-left-width',
				type: 'integer',
				units: ['px', '%']
				},{
				name: 'border style',
				property: 'border-left-style',
				type: 'select',
				list: [
				{name: 'none', value: 'none'},
				{name: 'hidden', value: 'hidden'},
				{name: 'dotted', value: 'dotted'},
				{name: 'dashed', value: 'dashed'},
				{name: 'solid', value: 'solid'},
				{name: 'double', value: 'double'},
				{name: 'groove', value: 'groove'},
				{name: 'ridge', value: 'ridge'},
				{name: 'inset', value: 'inset'},
				{name: 'outset', value: 'outset'},
				]
				},{
				name: 'border color',
				property: 'border-left-color',
				type: 'color',
				},
				
				]
				},{
				name: 'border right',
				property: 'border-right',
				type: 'composite',
				properties: [{
				name: 'border width',
				property: 'border-right-width',
				type: 'integer',
				units: ['px', '%']
				},{
				name: 'border style',
				property: 'border-right-style',
				type: 'select',
				list: [
				{name: 'none', value: 'none'},
				{name: 'hidden', value: 'hidden'},
				{name: 'dotted', value: 'dotted'},
				{name: 'dashed', value: 'dashed'},
				{name: 'solid', value: 'solid'},
				{name: 'double', value: 'double'},
				{name: 'groove', value: 'groove'},
				{name: 'ridge', value: 'ridge'},
				{name: 'inset', value: 'inset'},
				{name: 'outset', value: 'outset'},
				]
				},{
				name: 'border color',
				property: 'border-right-color',
				type: 'color',
				},
				
				]
				},{
				name: 'border top',
				property: 'border-top',
				type: 'composite',
				properties: [{
				name: 'border width',
				property: 'border-top-width',
				type: 'integer',
				units: ['px', '%']
				},{
				name: 'border style',
				property: 'border-top-style',
				type: 'select',
				list: [
				{name: 'none', value: 'none'},
				{name: 'hidden', value: 'hidden'},
				{name: 'dotted', value: 'dotted'},
				{name: 'dashed', value: 'dashed'},
				{name: 'solid', value: 'solid'},
				{name: 'double', value: 'double'},
				{name: 'groove', value: 'groove'},
				{name: 'ridge', value: 'ridge'},
				{name: 'inset', value: 'inset'},
				{name: 'outset', value: 'outset'},
				]
				},{
				name: 'border color',
				property: 'border-top-color',
				type: 'color',
				},
				
				]
				},{
				name: 'border radius',
				property: 'border-radius',
				type: 'composite',
				properties: [
				{
				name: 'top left',
				property: 'border-top-left-radius',
				type: 'integer',
				units: ['px', '%']
				},{
				name: 'top-right',
				property: 'border-top-right-radius',
				type: 'integer',
				units: ['px', '%']
				},{
				name: 'bottom right',
				property: 'border-bottom-right-radius',
				type: 'integer',
				units: ['px', '%']
				},{
				name: 'bottom left',
				property: 'border-bottom-left-radius',
				type: 'integer',
				units: ['px', '%']
				}]	
				},{
				name: 'border image',
				property: 'border-image',
				type: 'composite',
				properties: [
				{
				name: 'source',
				property: 'border-image-source',
				type: 'file',
				functionName: 'url'	
				},{
				name: 'slice',
				property: 'border-image-slice',
				type: '',
				},{
				name: 'width',
				property: 'border-image-width',
				type: '',
				},{
				name: 'outset',
				property: 'border-image-outset',
				type: 'integer',
				},{
			    name: 'repeat',
				property: 'border-image-repeat',
				type: 'radio',
				list: [
				{name: 'stretch', value: 'stretch'},
				{name: 'repeat', value: 'repeat'},
				{name: 'round', value: 'round'},
				{name: 'space', value: 'space'},
				]}]},{
				name: 'outline',
				property: 'outline',
				type: 'composite',
				properties: [{
				name: 'outline width',
				property: 'outline-width',
				type: 'integer',
				units: ['px', '%']
				},{
				name: 'outline style',
				property: 'outline-style',
				type: 'select',
				list: [
				{name: 'none', value: 'none'},
				{name: 'hidden', value: 'hidden'},
				{name: 'dotted', value: 'dotted'},
				{name: 'dashed', value: 'dashed'},
				{name: 'solid', value: 'solid'},
				{name: 'double', value: 'double'},
				{name: 'groove', value: 'groove'},
				{name: 'ridge', value: 'ridge'},
				{name: 'inset', value: 'inset'},
				{name: 'outset', value: 'outset'},
				]
				},{
				name: 'outline color',
				property: 'outline-color',
				type: 'color',
				},
				
				]},{
				name: 'outline offset',
				property: 'outline-offset',
				type: 'integer',
				units: ['px', '%']
				},
				
				 ] 
			  },{
				name: 'table and columns',
				open: false,
				properties: [
				{
			    name: 'border collapse',
				property: 'border-collapse',
				type: 'radio',
				list: [
				{name: 'separate', value: 'separate'},
				{name: 'collapse', value: 'collapse'},
				]
				
				},{
				name: 'border spacing',
				property: 'border-spacing',
				type: 'integer',
				units : ['px', '%']
				},{
			    name: 'caption side',
				property: 'caption-side',
				type: 'radio',
				list: [
				{name: 'top', value: 'top'},
				{name: 'bottom', value: 'bottom'},
				]
				
				},{
			    name: 'table layout',
				property: 'table-layout',
				type: 'radio',
				list: [
				{name: 'auto', value: 'auto'},
				{name: 'fixed', value: 'fixed'},
				]
				
				},{
				name: 'column width',
				property: 'column-width',
				type: 'integer',
				units : ['px', '%']
				},{
				name: 'column count',
				property: 'column-count',
				type: 'integer',
				
				},{
			    name: 'column fill',
				property: 'column-fill',
				type: 'radio',
				list: [
				{name: 'auto', value: 'auto'},
				{name: 'balance', value: 'balance'},
				]
				
				},{
			    name: 'column span',
				property: 'column-span',
				type: 'radio',
				list: [
				{name: 'none', value: 'none'},
				{name: 'all', value: 'all'},
				]
			
				},{
				name: 'column gap',
				property: 'column-gap',
				type: 'integer',
				units : ['px', '%']
				},{
				name: 'column rule',
				property: 'column-rule',
				type: 'composite',
				properties: [{
				name: 'width',
				property: 'column-rule-width',
				type: 'integer',
				units : ['px', '%']
				},{
				name: 'style',
				property: 'column-rule-style',
				type: 'select',
				list: [
				{name: 'none', value: 'none'},
				{name: 'hidden', value: 'hidden'},
				{name: 'dotted', value: 'dotted'},
				{name: 'dashed', value: 'dashed'},
				{name: 'solid', value: 'solid'},
				{name: 'double', value: 'double'},
				{name: 'groove', value: 'groove'},
				{name: 'ridge', value: 'ridge'},
				{name: 'inset', value: 'inset'},
				{name: 'outset', value: 'outset'},
				]
				},{
				name: 'color',
				property: 'column-rule-color',
				type: 'color',
				},]},{
				name: 'empty cells',
				property: 'empty-cells',
				type: 'radio',
				list: [
				{name: 'show',value: 'show'},
				{name: 'hide',value: 'hide'}
				]
				},
				]
			  },{
                name: 'Extra',
                open: false,
                buildProps: ['transition', 'perspective', 'transform'],
                properties: [
				
				{
                  property: 'transition',
                  properties:[
                    { name: 'Property', property: 'transition-property'},
                    { name: 'Duration', property: 'transition-duration'},
                    { name: 'Easing', property: 'transition-timing-function'}
                  ],
                },{
				name: 'perspective',
				property: 'perspective',
				type: 'integer',
				units: ['px', '%']
				},{
                  property: 'transform',
                  properties:[
                    { name: 'Rotate X', property: 'transform-rotate-x'},
                    { name: 'Rotate Y', property: 'transform-rotate-y'},
                    { name: 'Rotate Z', property: 'transform-rotate-z'},
                    { name: 'Scale X', property: 'transform-scale-x'},
                    { name: 'Scale Y', property: 'transform-scale-y'},
                    { name: 'Scale Z', property: 'transform-scale-z'}
                  ],
                },{
				name: 'backface visibility',
				property: 'backface-visibility',
				type: 'radio',
				list: [
				{name: 'hidden', value: 'hidden'},
				{name: 'visible', value: 'visible'}
				
				]
				},{
				name: 'clear',
				property: 'clear',
				type: 'select',
				list: [
				{name: 'left', value: 'left'},
				{name: 'right', value: 'right'},
				{name: 'both', value: 'both'},
				
				]
				},{
				name: 'user select',
				property: 'user-select',
				type: 'select',
				list: [
				{name: 'auto', value: 'auto'},
				{name: 'none', value: 'none'},
				{name: 'text', value: 'text'},
				{name: 'all', value: 'all'},
				
				]
				},{
				name: 'image rendering',
				property: 'image-rendering',
				type: '',
				
				},{
				name: 'isolation',
				property: 'isolation',
				type: 'select',
				list: [
				{name: 'auto', value: 'auto'},
				{name: 'isolate', value: 'isolate'},
				
				]
				},]
              }
			  ,{
                name: 'Flex',
                open: false,
                properties: [{
                  
                  name: 'Flex Parent',
                  property: 'label-parent-flex',
                  type: 'integer',
                },{
                  name      : 'Direction',
                  property  : 'flex-direction',
                  type    : 'radio',
                  defaults  : 'row',
                  list    : [{
                            value   : 'row',
                            name    : 'Row',
                            className : 'icons-flex icon-dir-row',
                            title   : 'Row',
                          },{
                            value   : 'row-reverse',
                            name    : 'Row reverse',
                            className : 'icons-flex icon-dir-row-rev',
                            title   : 'Row reverse',
                          },{
                            value   : 'column',
                            name    : 'Column',
                            title   : 'Column',
                            className : 'icons-flex icon-dir-col',
                          },{
                            value   : 'column-reverse',
                            name    : 'Column reverse',
                            title   : 'Column reverse',
                            className : 'icons-flex icon-dir-col-rev',
                          }],
                },{
                  name      : 'Justify',
                  property  : 'justify-content',
                  type    : 'radio',
                  defaults  : 'flex-start',
                  list    : [{
                            value   : 'flex-start',
                            className : 'icons-flex icon-just-start',
                            title   : 'Start',
                          },{
                            value   : 'flex-end',
                            title    : 'End',
                            className : 'icons-flex icon-just-end',
                          },{
                            value   : 'space-between',
                            title    : 'Space between',
                            className : 'icons-flex icon-just-sp-bet',
                          },{
                            value   : 'space-around',
                            title    : 'Space around',
                            className : 'icons-flex icon-just-sp-ar',
                          },{
                            value   : 'center',
                            title    : 'Center',
                            className : 'icons-flex icon-just-sp-cent',
                          }],
                },{
                  name      : 'Align',
                  property  : 'align-items',
                  type    : 'radio',
                  defaults  : 'center',
                  list    : [{
                            value   : 'flex-start',
                            title    : 'Start',
                            className : 'icons-flex icon-al-start',
                          },{
                            value   : 'flex-end',
                            title    : 'End',
                            className : 'icons-flex icon-al-end',
                          },{
                            value   : 'stretch',
                            title    : 'Stretch',
                            className : 'icons-flex icon-al-str',
                          },{
                            value   : 'center',
                            title    : 'Center',
                            className : 'icons-flex icon-al-center',
                          }],
                },{
                  name      : 'flex wrap',
                  property  : 'flex-wrap',
                  type    : 'radio',
                  list    : [{
                            value   : 'nowrap',
                            name    : 'nowrap',
                            
                          },{
                            value   : 'wrap',
                            name    : 'wrap',
                            
                          },{
                            value   : 'wrap-reverse',
                            name    : 'wrap-reverse',
                            
                          },],
                },{
                  name      : 'Align content',
                  property  : 'align-content',
                  type    : 'radio',
                  list    : [{
                            value   : 'flex-start',
                            title    : 'Start',
                            className : 'icons-flex icon-al-start',
                          },{
                            value   : 'flex-end',
                            title    : 'End',
                            className : 'icons-flex icon-al-end',
                          },{
                            value   : 'stretch',
                            title    : 'Stretch',
                            className : 'icons-flex icon-al-str',
                          },{
                            value   : 'center',
                            title    : 'Center',
                            className : 'icons-flex icon-al-center',
                          }],
                },{
                  name:     'Order',
                  property:   'order',
                  type:     'integer',
                  defaults :  0,
                  min: 0
                },{
                  name    : 'Flex',
                  property  : 'flex',
                  type    : 'composite',
                  properties  : [{
                          name:     'Grow',
                          property:   'flex-grow',
                          type:     'integer',
                          defaults :  0,
                          min: 0
                        },{
                          name:     'Shrink',
                          property:   'flex-shrink',
                          type:     'integer',
                          defaults :  0,
                          min: 0
                        },{
                          name:     'Basis',
                          property:   'flex-basis',
                          type:     'integer',
                          units:    ['px','%',''],
                          unit: '',
                          defaults :  'auto',
                        }],
                },{
                  name      : 'Align',
                  property  : 'align-self',
                  type      : 'radio',
                  defaults  : 'auto',
                  list    : [{
                            value   : 'auto',
                            name    : 'Auto',
                          },{
                            value   : 'flex-start',
                            title    : 'Start',
                            className : 'icons-flex icon-al-start',
                          },{
                            value   : 'flex-end',
                            title    : 'End',
                            className : 'icons-flex icon-al-end',
                          },{
                            value   : 'stretch',
                            title    : 'Stretch',
                            className : 'icons-flex icon-al-str',
                          },{
                            value   : 'center',
                            title    : 'Center',
                            className : 'icons-flex icon-al-center',
                          }],
                }],
				},{
				name: 'grid',
				open: false,
				properties: [
				{
				name: 'grid auto columns',
				property: 'grid-auto-columns',
				type: 'integer',
				units : ['px', '%']
				},{
				name: 'grid area (itemname)',
				property: 'grid-area',
				type: '',
				
				},{
				name: 'grid auto flow',
				property: 'grid-auto-flow',
				type: 'select',
				list: [
				{name: 'row', value: 'row'},
				{name: 'column', value: 'column'},
				{name: 'dense', value: 'dense'},
				{name: 'row dense', value: 'row dense'},
				{name: 'column dense', value: 'column dense'},
				
				]
				},{
				name: 'grid auto rows',
				property: 'grid-auto-rows',
				type: 'integer',
				units : ['px', '%']
				},{
				name: 'grid column end (span n or n)',
				property: 'grid-column-end',
				type: '',
				},{
				name: 'grid column gap',
				property: 'grid-column-gap',
				type: 'integer',
				units : ['px', '%']
				},{
				name: 'grid column start (span n or n)',
				property: 'grid-column-start',
				type: '',
				},{
				name: 'grid row end (span n or n)',
				property: 'grid-row-end',
				type: '',
				},{
				name: 'grid row gap',
				property: 'grid-row-gap',
				type: 'integer',
				units : ['px', '%']
				},{
				name: 'grid row start (span n or n)',
				property: 'grid-row-start',
				type: '',
				
				},{
				name: 'grid template areas ("itemname itemname ...")',
				property: 'grid-template-areas',
				type: '',
				
				},{
				name: 'grid template columns (auto 60px ...)',
				property: 'grid-template-columns',
				type: '',
				
				},{
				name: 'grid template rows (auto 60px ...)',
				property: 'grid-template-rows',
				type: '',
				
				},
				
				
				]
				
				}
            ];
console.log('stylemanager sector variable created');
var gjsmenu = [
			{
				"text": "file",
				"sub": [
					{
						"text": "convert",
						"events": {
					    "click": function(e){
						editor.Commands.run('convopen');
					}
				},
					},
			]
			},{
			'text': 'tools',
			'sub': [
			{
			'text': 'select element',
			"events": {
					    "click": function(e){
						editor.Commands.run('selectelement');
					}
				},
			
			}
			]
			
			},{
				"text": "page",
				"events": {
					    "click": function(e){
						editor.Commands.run('pagepanel');
					}
				},
				
			},{
				"text": "create",
				"events": {
					"click": function(e){
						editor.Commands.run('create');
					}
				},
				
			},{
				"text": "panels",
				"sub": [ 
				{
				"text": "ace code editor",
				"events": {
					"click": function(e){
						currentpanel = 'panels/ace/kitchen-sink.html';editor.Commands.run('panelselect');panelselected = 1 ;
					}
				},
				
			},{
				"text": "method draw",
				"events": {
					"click": function(e){
						currentpanel = 'panels/method draw/index.html';editor.Commands.run('panelselect');panelselected = 1 ;
					}
				},
				
			},{
				"text": "animate css animation list",
				"events": {
					"click": function(e){
						currentpanel = 'panels/animatecsslist/index.html';editor.Commands.run('panelselect');panelselected = 1 ;	
					}
				},
				
			},{
				"text": "svg list",
				"events": {
					"click": function(e){
						currentpanel = 'panels/svglist/index.html';editor.Commands.run('panelselect');panelselected = 1 ;	
					}
				},
				
			},
				]
			},
			{
				"text": "Item 2",
				"icon": '<i class="fas fa-exclamation-circle"></i>',
				"events": {
					"click": function(e){
						alert(e);
					}
				}
			}
			
		];

console.log('gjs menu added');

var isinmenu;
var currentpanel = '.';
var panelselected = 0;
function panelclose() {
	panelselected = 0;
	document.getElementById('gjs').style.display = 'block';
	document.getElementById('panelcontainer').style.display = 'none';
}
class BlocksFilter {
  filterQuery = "";

  init = (bm) => {
    const container = bm.getContainer();
    const blocksParent = container.querySelector(".gjs-blocks-c");
    const filterContainer = document.createElement("div");
    filterContainer.style.width = "100%";
    filterContainer.style.padding = "5px";
    filterContainer.innerHTML = this.getFilterContent;
    const input = filterContainer.querySelector("input");
    input.addEventListener("input", e => {
      this.filterQuery = e.target["value"];
      this.updateBlocks(bm);
    })
    blocksParent.insertBefore(filterContainer, blocksParent.firstChild);
    this.updateBlocks(bm);
    input.value = this.filterQuery;
  }

  updateBlocks = (blockManager) => {
    const container = editor.BlockManager.getContainer();
    const blockViews = container.querySelectorAll(".gjs-block");
    for (let i = 0; i < blockViews.length; i++) {
      if (new RegExp(this.filterQuery.trim(), 'gi').test(blockViews[i].getAttribute("title"))) {
        blockViews[i].style.display = "block";
      } else {
        blockViews[i].style.display = "none";
      }
    }
  }

  getFilterContent = `
        <div class="form-group has-search" style="
        position: absolute;
        color: #aaa;
        z-index: 2;
        display: block;
        width: 1.375rem;
        height: 1.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
    ">
    <span class="fa fa-search form-control-feedback"></span>
    </div>
    <input type="text" class="form-control" placeholder="Search" style="padding-left:22px">
        `
}
var iconflex = document.createElement('style');
iconflex.innerHTML = `.icons-flex {
          background-size: 70% 65% !important;
          height: 15px;
          width: 17px;
          opacity: 0.9;
        }
        .icon-dir-row {
          background: url("fonts/icons/flex-dir-row.png") no-repeat center;
        }
        .icon-dir-row-rev {
          background: url("fonts/icons/flex-dir-row-rev.png") no-repeat center;
        }
        .icon-dir-col {
          background: url("fonts/icons/flex-dir-col.png") no-repeat center;
        }
        .icon-dir-col-rev {
          background: url("fonts/icons/flex-dir-col-rev.png") no-repeat center;
        }
        .icon-just-start{
         background: url("fonts/icons/flex-just-start.png") no-repeat center;
        }
        .icon-just-end{
         background: url("fonts/icons/flex-just-end.png") no-repeat center;
        }
        .icon-just-sp-bet{
         background: url("fonts/icons/flex-just-sp-bet.png") no-repeat center;
        }
        .icon-just-sp-ar{
         background: url("fonts/icons/flex-just-sp-ar.png") no-repeat center;
        }
        .icon-just-sp-cent{
         background: url("fonts/icons/flex-just-sp-cent.png") no-repeat center;
        }
        .icon-al-start{
         background: url("fonts/icons/flex-al-start.png") no-repeat center;
        }
        .icon-al-end{
         background: url("fonts/icons/flex-al-end.png") no-repeat center;
        }
        .icon-al-str{
         background: url("fonts/icons/flex-al-str.png") no-repeat center;
        }
        .icon-al-center{
         background: url("fonts/icons/flex-al-center.png") no-repeat center;
        }`;

grapesjs.plugins.add('grapesjs++', (editor, opts) => {
	


  
	var domc = editor.DomComponents;
 

	//onload
	editor.on("load", function() {
		//wrapper attributes
		window.addEventListener('beforeunload', function(event) {
		localStorage.setItem('wrapperAttributes', JSON.stringify(Object.fromEntries(
		Object.entries(editor.getWrapper().getAttributes()).filter(([_, v]) => v != false))));
		}, false);
		editor.getWrapper().setAttributes(JSON.parse(localStorage.getItem('wrapperAttributes')));
		// context-menu
		window.gjsmenuobject = new ContextMenu(gjsmenu);
		setTimeout(function() {document.getElementById('gjsmenu').addEventListener("contextmenu", function(e){
				gjsmenuobject.display(e);
				document.getElementById('gjs').style.display = 'none';
				isinmenu = 1;
		});}, 500)
		window.onclick = function() {
			if (isinmenu === 1 ) { if (panelselected === 0) {
				document.getElementById('gjs').style.display = 'block'; isinmenu = 0}}}
		 
		 setTimeout(function() {blockfilter.init(editor.BlockManager);console.clear()}, 500);
		 console.log('block search added');
		 panelcontainer = document.createElement('div');
panelcontainer.id = 'panelcontainer';
	panelcontainer.innerHTML = `<input type ='button' value = 'close' onclick ='panelclose()'>
	<iframe id = 'panelframe' height = '100%' width = '100%'>`
		 document.body.appendChild(panelcontainer);
	document.getElementById('panelcontainer').style.display = 'none';
	
    editor.Commands.add('togeneralHTMLel', (editor, sender, options = {}) => {
	dgh = editor.getSelected().toHTML();
	dgh1 = dgh.split(' ', 1)[0];
	dgh2 = dgh.replace(`${dgh1} `, '');
	dgh = `${dgh1} mydata-gjs-rttype = '${editor.getSelected().get('type')}' data-gjs-type = 'gnlHTMLel' ${dgh2}`;
	editor.select(editor.getSelected().replaceWith(dgh));

});
editor.getWrapper().components().models.forEach(function(model) {
	model.initToolbar.apply(model);
                    const tb = model.get('toolbar');
                   
                        tb.unshift({
                            command: 'updatecomponent',
                            label: `
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg>
							`,
                            
                        });
                        model.set('toolbar', tb);
                    
})
editor.Commands.add('updatecomponent', function(editor, sender, options = {}){

	
	dgh = editor.getSelected().toHTML();
	dgh1 = dgh.split(' ', 1)[0];
	dgh2 = dgh.replace(`${dgh1} `, '');
	dgh = `${dgh1} data-gjs-type = '${editor.getSelected().get('type')}' ${dgh2}`;
	editor.select(editor.getSelected().replaceWith(dgh));
});
 editor.Commands.add('fromgeneralHTMLel', function() {
window.dgh = editor.getSelected().toHTML();
var dgh2 = dgh.replace('mydata-gjs-rttype', 'data-gjs-type');
document.getElementById('dghel').innerHTML = dgh2;
dgh3 = document.getElementById('dghel').firstChild;
dgh3.removeAttribute('data-highlightable');
dgh3.classList.remove('gjs-selected');
editor.select(editor.getSelected().replaceWith(document.getElementById('dghel').innerHTML));
dgh3.remove();
	});
 document.body.appendChild(document.createElement('div')).id = 'dghel';
const { Components } = editor;
Components.getTypes().forEach(({ id, model }) => {
    Components.addType(id, {
      model: {
	initToolbar() {
    model.prototype.initToolbar.apply(this, arguments);
    const tb = this.get('toolbar');
    const tbExists = tb.some(item => item.command === 'updatecomponent');

    if (!tbExists) {
    tb.unshift({
    command: 'updatecomponent',
    label: `
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg>
	`,
                
    });
    this.set('toolbar', tb);
    }
    },
            defaults: { ...model.getDefaults(),
              traits: [ ...model.getDefaults().traits, {
  type: 'button',
  text: 'edit as general html element',
  full: true, 
  command: 'togeneralHTMLel',
}
 ]},}},
    );
	
});
editor.Commands.add('refreshAttr', function(editor, sender, options = {}){
editor.getSelected().setAttributes(Object.fromEntries(
		Object.entries(editor.getSelected().getAttributes()).filter(([_, v]) => v != false)));
});
editor.DomComponents.addType('gnlHTMLel', {
	model:{
	defaults: {
	
	traits: [
	{
	text: 'edit as normal',
	type: 'button',
	full: true,
	command: 'fromgeneralHTMLel'
	},{
	text: 'update the component',
	type: 'button',
	full: true,
	command: 'updatecomponent'
	}, new gnlHTMLelTraitTypes() ,
	{type:'text', name:'tagName', label: 'tagName', changeProp: 1},'accesskey', 
	{type:'checkbox', name:'contenteditable', label: 'content editable', options: [{value:'false'},{value:'true'}]},
	{label: 'direction',name: 'dir',type: 'select',options: [{ value: 'ltr', name: 'left to right' },{ value: 'rtl', name: 'right to left' },]},
	{type:'checkbox', name:'draggable', label: 'draggable', options: [{value:'true'},{value:'false'}]},
	{type:'checkbox', name:'hidden', label: 'hidden', options: [{value:'false'},{value:'true'}]},
	'id','lang','title',{type:'checkbox', name:'spellcheck', label: 'spellcheck', options: [{value:'true'},{value:'false'}]},
	{name:'tabindex',label:'tabindex',type:'number'},{type:'checkbox', name:'translate', label: 'translate', options: [{value:'true'},{value:'false'}]},
	]}}
});
editor.DomComponents.addType('gnlHTMLel-events-form', {
	model:{
	defaults: {
	
	traits: [
	{
	text: 'edit as normal',
	type: 'button',
	full: true,
	command: 'fromgeneralHTMLel'
	},{
	text: 'update the component',
	type: 'button',
	full: true,
	command: 'updatecomponent'
	},new gnlHTMLelTraitTypes(),
	'onblur', 'onchange', 'oncontextmenu', 'onfocus', 'oninput', 'oninvalid', 'onreset', 'onsearch', 'onselect', 'onsubmit'
	]}}
});
editor.DomComponents.addType('gnlHTMLel-events-mouse-and-keyboard', {
	model:{
	defaults: {
	
	traits: [
	{
	text: 'edit as normal',
	type: 'button',
	full: true,
	command: 'fromgeneralHTMLel'
	},{
	text: 'update the component',
	type: 'button',
	full: true,
	command: 'updatecomponent'
	},new gnlHTMLelTraitTypes(),
	'onkeydown', 'onkeypress', 'onkeyup', 'onclick', 'ondblclick', 'onmousedown', 'onmousemove', 'onmouseout',
	'onmouseover', 'onmouseup', 'onmousewheel', 'onwheel',
	]}}
});
editor.DomComponents.addType('gnlHTMLel-events-media', {
	model:{
	defaults: {
	
	traits: [
	{
	text: 'edit as normal',
	type: 'button',
	full: true,
	command: 'fromgeneralHTMLel'
	},{
	text: 'update the component',
	type: 'button',
	full: true,
	command: 'updatecomponent'
	},new gnlHTMLelTraitTypes(),
	'onabort', 'oncanplay', 'oncanplaythrough', 'oncuechange', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onloadeddata',
	'onloadedmetadata', 'onloadstart', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onseeked', 'onseeking', 'onstalled',
	'onsuspend', 'ontimeupdate', 'onvolumechange', 'onwaiting',
	]}}
});

editor.DomComponents.addType('gnlHTMLel-events-others', {
	model:{
	defaults: {
	
	traits: [
	{
	text: 'edit as normal',
	type: 'button',
	full: true,
	command: 'fromgeneralHTMLel'
	},{
	text: 'update the component',
	type: 'button',
	full: true,
	command: 'updatecomponent'
	},new gnlHTMLelTraitTypes(),
	'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'onscroll',
	'oncopy', 'oncut', 'onpaste', 'ontoggle',
	]}}
});
editor.DomComponents.addType('gnlHTMLel-functions', {
	model:{
	defaults: {
	
	traits: [
	{
	text: 'edit as normal',
	type: 'button',
	full: true,
	command: 'fromgeneralHTMLel'
	},{
	text: 'update the component',
	type: 'button',
	full: true,
	command: 'updatecomponent'
	},new gnlHTMLelTraitTypes(),
	{
	text: 'refresh attributes',
	type: 'button',
	full: true,
	command: 'refreshAttr'
	},
	]}}
});
function gnlHTMLelTraitTypes() { return {
	type:'select', name:'type', label: 'select trait category', changeProp: 1, options: [
	{name: 'main',value:'gnlHTMLel'},
	{name: 'events-form',value:'gnlHTMLel-events-form'},
	{name: 'events-mouse-and-keyboard',value:'gnlHTMLel-events-mouse-and-keyboard'},
	{name: 'events-media',value:'gnlHTMLel-events-media'},
	{name: 'events-others',value:'gnlHTMLel-events-others'},
	{name: 'functions',value:'gnlHTMLel-functions'}
],}}
console.log('general html component editing added');
		console.log('loaded');

editor.Panels.getButton('views', 'open-blocks').set('active', true);
	});
document.head.appendChild(iconflex);
console.log('flex icons added')


	//device
var devicemanager = editor.DeviceManager;
  devicemanager.add('Extra Small', '575px');
  devicemanager.add('Small', '767px');
  devicemanager.add('Medium', '991px');
  devicemanager.add('Large', '1199px');
  devicemanager.add('Extra Large', '100%');

  var panels = editor.Panels;
  var commands = editor.Commands;
  var panelDevices = panels.addPanel({ id: 'devices-buttons' });
  var deviceBtns = panelDevices.get('buttons');

  deviceBtns.add([
    {
      id: 'deviceXl',
      command: 'set-device-xl',
      className: 'fa fa-desktop',
      text: 'XL',
      attributes: { title: 'Extra Large' },
      active: 1
    },
    {
      id: 'deviceLg',
      command: 'set-device-lg',
      className: 'fa fa-desktop',
      attributes: { title: 'Large' }
    },
    {
      id: 'devicemd',
      command: 'set-device-md',
      className: 'fa fa-tablet',
      attributes: { title: 'Medium' }
    },
    {
      id: 'deviceSm',
      command: 'set-device-sm',
      className: 'fa fa-mobile',
      attributes: { title: 'Small' }
    },
    {
      id: 'deviceXs',
      command: 'set-device-xs',
      className: 'fa fa-mobile',
      attributes: { title: 'Extra Small' }
    }
  ]);

  commands.add('set-device-xs', {
    run: function (editor) {
      editor.setDevice('Extra Small');
    }
  });
  commands.add('set-device-sm', {
    run: function (editor) {
      editor.setDevice('Small');
    }
  });
  commands.add('set-device-md', {
    run: function (editor) {
      editor.setDevice('Medium');
    }
  });
  commands.add('set-device-lg', {
    run: function (editor) {
      editor.setDevice('Large');
    }
  });
  commands.add('set-device-xl', {
    run: function (editor) {
      editor.setDevice('Extra Large');
    }
  });
  console.log('devices added');
  //command


  var convfilename = 'hallo';
 var doc ;
 var mydocumet ;
  commands.add('convtopdf', editor => {
	  window.jsPDF = window.jspdf.jsPDF;
mydocumet = editor.getHtml();
 doc = new jsPDF(); doc.html(mydocumet, {
  callback: function (pdf) {
    doc.save(convfilename);
  }
}); 
}); 



  //pannls and modals 
  const modal = editor.Modal;
  commands.add('create', editor => {
	  modal.open({
	  title: "create",
	  content: `<div id="create">
	  <input type = 'button' value='block' onclick= "editor.Modal.close();editor.Commands.run('createblock');"/>
	  </div>
  `
	  });
}); 
console.log('create modal added');
commands.add('selectelement', editor => {
	  modal.open({
	  title: "select element",
	  content: `<div id="selectel">
	  <input id = 'selectinput'>
	  <input type = 'button' value='select' onclick= "selectelement();"/>
	  </div>
  `
	  });
}); 

console.log('select element panel added');
  commands.add('createblock', editor => { modal.open({
	  title: "create block",
	  content: `<div id="createblock" class="createblock">
	  <div id="createblockpreview" class="div"></div>
	  <input type="text" name="default-name" placeholder="block id" id="createblockid"/>
	  <div class="div"><input type="text" name="default-name" placeholder="block label" id="createblocklabel"/><input type="text" name="default-name" placeholder="block category" id="createblockcategory"/> </div>
	  <div class="div"><input type="text" name="default-name" placeholder="block type" id="createblocktype"/><input type="text" name="default-name" placeholder="block content" id="createblockcontent"/></div>
	  <input type="button" onclick="createblock();"/></div>
  `
  });
  });
console.log('create block modal added')
    commands.add('convopen', editor => { modal.open({
	  title: "convert",
	  content: `<div id="convert panel">
	  <input type = 'button' value='pdf' onclick= "editor.Commands.run('convtopdf')"/>

	  </div>
  `
  });
  });
  console.log('convert modal added')
  const panelManager = editor.Panels;
  
  panelManager.addButton('options',{
  id: 'canvas-clear',
  className: 'canvas-clear',
  label:'<svg  width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>',
  command: 'core:canvas-clear',
  active: false,});
  var hfjd = document.createElement('div');hfjd.innerHTML = `<img id="gjsmenu" data-gjs-type="image" draggable="true" src="data:image/png;base64,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" height="${opts.gjsmenuheight}" width="${opts.gjsmenuwidth}" >`;
document.body.insertBefore(hfjd, document.body.childNodes[0]);
 
  
console.log('all buttons added')
//page panel
var pagesids;
var varahd;
var vardhd;

commands.add('pagepanel', editor => {
	  modal.open({
	  title: "pages",
	  content: `<div id="pages">
	 <input id = 'pageselectinput' list = 'pageslist'>
	 <datalist id="pageslist"></datalist>
	 <input type = 'button' onclick = 'createPage()' value = 'createPage'>
	 <input type = 'button' onclick = 'removePage()' value = 'removePage'>
	 <input type = 'button' onclick = 'selectPage()' value = 'selectPage'>
	 <div id = 'availablePages'>availablePages</div>
	  </div>
  `
	  });
	  pagesids = editor.Pages.getAll();
	  for (let i = 0; i < pagesids.length; i++) {
	  varahd = document.createElement('p');
	  varahd.innerText = pagesids[i].id;
	  document.getElementById('availablePages').appendChild(varahd);
	  varald = document.createElement('option');
	  varald.innerHTML = pagesids[i].id;
	  document.getElementById('pageslist').appendChild(varald);
	  }
}); 


console.log('page panel added');
//panel engine
var panelcontainer;
var panelframe;
commands.add('panelselect', editor => {
	panelclose();
    panelframe = document.getElementById('panelframe');
	panelframe.src = currentpanel;
	document.getElementById('panelcontainer').style.display = 'inline';
	document.getElementById('gjs').style.display = 'none';
	
}); 

console.log('panel engine added');
  //traits
  var trm = editor.TraitManager;

 
  console.log('all traits type added');
//block search


var blockfilter = new BlocksFilter;

  //types
 
 editor.DomComponents.addType('wrapper', {
	model: { defaults: {...editor.DomComponents.getType('wrapper').model.getDefaults(), traits: [
	'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onerror', 'onhashchange', 'onload', 'onmessage', 'onoffline', 'ononline',
	'onpagehide', 'onpageshow', 'onpopstate', 'onresize', 'onstorage', 'onunload',
	]}}
 });

  editor.DomComponents.addType('image', {
    model: editor.DomComponents.getType('image').model.extend({
      defaults: Object.assign({}, editor.DomComponents.getType('image').model.prototype.defaults, {
        'custom-name': 'Image',

        traits: [
          {
            type: 'text',
            label: 'Source (URL)',
            name: 'src'
          },
          {
            type: 'text',
            label: 'Alternate text',
            name: 'alt'
          },
		  {
            type: 'number',
            label: 'height',
            name: 'height'
          },
		  {
            type: 'number',
            label: 'width',
            name: 'width'
          },
          
        ]
      })
    }, {
      isComponent (el) {
        if (el && el.tagName && el.tagName === 'IMG') {
          return { type: 'image' };
        }
      }
    }),
    view: editor.DomComponents.getType('image').view
  });
editor.DomComponents.addType('header', {
    model: editor.DomComponents.getType('text').model.extend({
        defaults: Object.assign({}, editor.DomComponents.getType('text').model.prototype.defaults, {
          'custom-name': 'Header',
          tagName: 'h1',
          traits: editor.DomComponents.getType('text').model.prototype.defaults.traits.concat([
            {
              type: 'select',
              options: [
                { value: 'h1', name: 'One (largest)' },
                { value: 'h2', name: 'Two' },
                { value: 'h3', name: 'Three' },
                { value: 'h4', name: 'Four' },
                { value: 'h5', name: 'Five' },
                { value: 'h6', name: 'Six (smallest)' }
              ],
              label: 'Size',
              name: 'tagName',
              changeProp: 1
            }
          ])
        })
      },
      {
        isComponent (el) {
          if (
            el &&
            el.tagName &&
            ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName)
          ) {
            return { type: 'header' };
          }
        }
      }
    ),
    view: editor.DomComponents.getType('text').view
  });
  
  editor.DomComponents.addType('text', {
    model: editor.DomComponents.getType('text').model.extend({
      defaults: Object.assign({}, editor.DomComponents.getType('text').model.prototype.defaults, {
        droppable: true,
        traits: editor.DomComponents.getType('default').model.prototype.defaults.traits.concat([
		
           {
              type: 'select',
              options: [
                { value: 'p', name: 'normal' },
                { value: 'sub', name: 'subscript' },
                { value: 'sup', name: 'superscript' },
                { value: 'b', name: 'bold' },
                { value: 'i', name: 'italic' },
                { value: 'mark', name: 'mark' },
				{ value: 'em', name: 'emphasized' },
				{ value: 'strong', name: 'strong' },
				{ value: 'del', name: 'deleted' },
				{ value: 'small', name: 'small' },
				{ value: 'ins', name: 'inserted' },
				{ value: 'abbr', name: 'abbreviation' },
				{ value: 'address', name: 'contact information/address tag' },
				{ value: 'bdi', name: 'Bi-Directional Isolation' },
				{ value: 'bdo', name: 'Bi-Directional Override' },
				{ value: 'blockquote', name: 'blockquote' },
				{ value: 'cite', name: 'cite' },
				{ value: 'code', name: 'code' },
				{ value: 'dfn', name: 'definition element' },
				{ value: 'kbd', name: 'keyboard input' },
				{ value: 'pre', name: 'pre-formatted' },
				{ value: 'q', name: 'short quotation' },
				{ value: 'u', name: 'unarticulated ' },
				{ value: 'var', name: 'variable' },
				
              ],
              label: 'type',
              name: 'tagName',
              changeProp: 1
            },{
			label: 'direction',
			name: 'dir',
			type: 'select',
			options: [
			{ value: 'ltr', name: 'left to right' },
			{ value: 'rtl', name: 'right to left' },
			]
			}
        ])
      },{
        isComponent : false,
      } )
    }),
    view: editor.DomComponents.getType('text').view
  });

  
  

  editor.DomComponents.addType('link', {
    model: editor.DomComponents.getType('link').model.extend({
      defaults: Object.assign({}, editor.DomComponents.getType('link').model.prototype.defaults, {
        traits: [
          {
            type: 'text',
            name: 'id',
            label: 'Id',
            placeholder: 'eg. Text here'
          }].concat(editor.DomComponents.getType('link').model.prototype.defaults.traits, [
            
          ])
      })
    }),
    view: editor.DomComponents.getType('link').view
  });

 

  editor.DomComponents.addType('button', {
    model: editor.DomComponents.getType('link').model.extend({
      defaults: Object.assign({}, editor.DomComponents.getType('link').model.prototype.defaults, {
        'custom-name': 'Button',
        attributes: {
          role: 'button'
        },
        classes: ['btn'],
        traits: editor.DomComponents.getType('link').model.prototype.defaults.traits.concat([
          
          

        ])
      }, {
        isComponent (el) {
          if (el && el.classList && el.classList.contains('btn')) {
            return { type: 'button' };
          }
        }
      })
    }),
    view: editor.DomComponents.getType('link').view
  });

  editor.DomComponents.addType('list', {
    model: editor.DomComponents.getType('default').model.extend({
      defaults: Object.assign({}, editor.DomComponents.getType('default').model.prototype.defaults, {
        'custom-name': 'List',
        droppable: true,
        traits: editor.DomComponents.getType('default').model.prototype.defaults.traits.concat([
          {
            type: 'select',
            label: 'Type',
            name: 'tagName',
            options: [
              { value: 'ul', name: 'Unordered' },
              { value: 'ol', name: 'Ordered' }
            ],
            changeProp: 1
          },
          
        ])
      })
    }, {
      isComponent (el) {
        if (el && el.tagName && (el.tagName === 'UL' || el.tagName === 'OL')) {
          return { type: 'list' };
        }
      }
    }),
    view: editor.DomComponents.getType('default').view
  });

  editor.DomComponents.addType('list-item', {
    model: editor.DomComponents.getType('text').model.extend({
      defaults: Object.assign({}, editor.DomComponents.getType('text').model.prototype.defaults, {
        'custom-name': 'Item',
        tagName: 'li',
        draggable: 'ul, ol'
      })
    }, {
      isComponent (el) {
        if (el && el.tagName && el.tagName === 'LI') {
          return { type: 'list-item' }
        }
      }
    }),
    view: editor.DomComponents.getType('text').view
  })
  
editor.DomComponents.addType('container', { 
isComponent (el) {
        if (el && el.tagName && el.tagName === 'div') {
          return { type: 'container' }
}},
  // Model definition
  model: {
    
    defaults: {
      tagName: 'div',
      draggable: true,
      droppable: true,
       attributes: { 
       
      },
	  traits: [
        'id',
        {
		name: 'tagName',
		label: 'tagName',
		type: 'select',
		changeProp: 1,
		options: [
		{value: 'div'},
		{value: 'span'},
		{value: 'header'},
		{value: 'footer'},
		{value: 'main'},
		{value: 'section'},
		{value: 'article'},
		{value: 'aside'},
		{value: 'data'},
		{value: 'template'},
		]},'value'],}}
});
editor.DomComponents.addType('meter', { 
isComponent (el) {
        if (el && el.tagName && el.tagName === 'meter') {
          return { type: 'meter' }
}},
  // Model definition
  model: {
    
    defaults: {
      tagName: 'meter',
      draggable: true,
      droppable: true,
       attributes: { 
       
      },
	  traits: [
        'id',{type: 'number',name:'high'},
{type: 'number',name:'low'},
{type: 'number',name:'max'},
{type: 'number',name:'min'},
{type: 'number',name:'optimum'},
{type: 'number',name:'value'},],}}
});
editor.DomComponents.addType('progress', { 
isComponent (el) {
        if (el && el.tagName && el.tagName === 'progress') {
          return { type: 'progress' }
}},
  // Model definition
  model: {
    
    defaults: {
      tagName: 'progress',
      draggable: true,
      droppable: true,
       attributes: { 
       
      },
	  traits: [
        'id',
{type: 'number',name:'max'},
{type: 'number',name:'value'},],}}
});
editor.DomComponents.addType('dialog', { 
isComponent (el) {
        if (el && el.tagName && el.tagName === 'dialog') {
          return { type: 'dialog' }
}},
  // Model definition
  model: {
    
    defaults: {
      tagName: 'dialog',
      draggable: true,
      droppable: true,
       attributes: { 
       
      },
	  traits: [
        'id',
		{
  type: 'checkbox',
  name: 'open',
  label : 'open',
  valueTrue: true, 
  valueFalse: false, 
}
		],}}
});
	editor.DomComponents.addType('details', { 
isComponent (el) {
        if (el && el.tagName && el.tagName === 'details') {
          return { type: 'details' }
}},
  // Model definition
  model: {
    
    defaults: {
      tagName: 'details',
      draggable: true,
      droppable: true,
       attributes: { 
       
      },
	  traits: [
        'id',
        {
  type: 'checkbox',
  name: 'open',
  label : 'open',
  valueTrue: true, 
  valueFalse: false, 
}],}}
});
	editor.DomComponents.addType('summary', { 
isComponent (el) {
        if (el && el.tagName && el.tagName === 'summary') {
          return { type: 'summary' }
}},
  // Model definition
  model: {
    
    defaults: {
      tagName: 'summary',
      draggable: true,
      droppable: true,
       attributes: { 
       
      },
	  traits: [
        'id',
    ],}}
});
	
editor.DomComponents.addType('iframe1', {
  
  isComponent: el => el.tagName === 'iframe',

  // Model definition
  model: {
    
    defaults: {
      tagName: 'iframe',
      draggable: true,
      droppable: true,
       attributes: { 
      },
	  traits: [
        'id',
        "src",
		  {
            type: 'text',
            label: 'height',
            name: 'height'
          },
		  {
            type: 'text',
            label: 'width',
            name: 'width'
          }
      ],
    }
  }
});
editor.DomComponents.addType('input', {

       isComponent (el) {
        if (el && el.tagName && el.tagName === 'input') {
          return { type: 'input' }
        }
  },

  // Model definition
  model: {
    // Default properties
    defaults: {
      tagName: 'input',
      draggable: true,
      droppable: false, 
      attributes: { 
        type: 'text',
        name: 'default-name',
        placeholder: 'Insert text here',
      },
      traits: [
	  'id',
	  'class',
        'name',
        'placeholder',
         {
            type: 'select', 
            label: 'Type',
            name: 'type',
            options: [
              { id: 'text', name: 'text'},
              { id: 'email', name: 'email'},
              { id: 'password', name: 'password'},
              { id: 'number', name: 'number'},
			  { id: 'button', name: 'button'},
			  { id: 'checkbox', name: 'checkbox'},
			  { id: 'color', name: 'color'},
			  { id: 'date', name: 'date'},
			  { id: 'datetime-local', name: 'datetime-local'},
			  { id: 'file', name: 'file'},
			  { id: 'hidden', name: 'hidden'},
			  { id: 'image', name: 'image'},
			  { id: 'month', name: 'month'},
			  { id: 'radio', name: 'radio'},
			  { id: 'range', name: 'range'},
			  { id: 'reset', name: 'reset'},
			  { id: 'search', name: 'search'},
			  { id: 'submit', name: 'submit'},
			  { id: 'tel', name: 'tel'},
			  { id: 'time', name: 'time'},
			  { id: 'url', name: 'url'},
			  { id: 'week', name: 'week'},
            ],
			},
			'onclick',
			'accept',
			'alt',
			'height',
			'max',
			'maxlength',
			'min',
			'minlength',
			'size',
			'src',
			'value',
			'width',
          
      ],
    }, 
 }
});
editor.DomComponents.addType('ul', {
  
  isComponent: el => el.tagName === 'ul',

  // Model definition
  model: {
    
    defaults: {
      tagName: 'ul',
      draggable: true,
      droppable: true,
       attributes: { 
        class: "ul",
      },
	  traits: [
        
        'id',
        
      ],
    }
  }
});
editor.DomComponents.addType('ol', {
  
  isComponent: el => el.tagName === 'ol',

  // Model definition
  model: {
    
    defaults: {
      tagName: 'ol',
      draggable: true,
      droppable: true,
       attributes: { 
        class: "ol",
      },
	  traits: [
        'class',
        'id',
        
      ],
    }
  }
});

editor.DomComponents.addType('dl', {
  
  isComponent: el => el.tagName === 'dl',

  // Model definition
  model: {
    
    defaults: {
      tagName: 'dl',
      draggable: true,
      droppable: true,
       attributes: { 
        class: "dl",
      },
	  traits: [
        'class',
        'id',
        
      ],
    }
  }
});
editor.DomComponents.addType('br', {
  
  isComponent: el => el.tagName === 'br',

  // Model definition
  model: {
    
    defaults: {
      tagName: 'br',
      draggable: true,
      droppable: true,
       attributes: { 
        class: "br",
      },
	  traits: [
        'class',
        'id',
        
      ],
    }
  }
});
//hr
editor.DomComponents.addType('hr', {
  
  isComponent: el => el.tagName === 'hr',

  // Model definition
  model: {
    
    defaults: {
      tagName: 'hr',
      draggable: true,
      droppable: true,
       attributes: { 
        class: "hr",
      },
	  traits: [
        'class',
        'id',
        
      ],
    }
  }
});
console.log('all components types added')
	//block
var blockManager = editor.BlockManager;
  //container
  blockManager.add('container', {
  label: 'container',
  
  content: {
        type: 'container',
       content: 'hallo',
        activeOnRender: 1
      },
  category: 'Boxes',
});
//iframe
blockManager.add('iframe', {
  label: 'iframe',
 content: {
        type: 'iframe1',
        
        activeOnRender: 1
      },
  
  category: 'Boxes',
})
//details
blockManager.add('details', {
  label: 'details',
 content: {
        type: 'details',
        content: `<summary gjs-type = 'summary'>hallo </summary>`,
        activeOnRender: 1
      },
  
  category: 'Boxes',
})
blockManager.add('dialog', {
  label: 'dialog',
 content: {
        type: 'dialog',
        content: 'hallo',
        activeOnRender: 1
      },
  
  category: 'Boxes',
})
blockManager.add('summary', {
  label: 'summary',
 content: {
        type: 'summary',
        
        activeOnRender: 1
      },
  
  category: 'Boxes',
})
 // Header
  blockManager.add('header', {
    label: 'Header',
    category: "Text",
    attributes: { class: 'fa fa-header' },
    content: {
      type: 'header',
      content: 'Insert your header text here'
    }
  });
   
  blockManager.add('meter', {
    label: 'meter',
    category: "Forms",
    
    content: {
      type: 'meter',
      
    }
  });
  blockManager.add('progress', {
    label: 'progress',
    category: "components",
    
    content: {
      type: 'progress',
      
    }
  });
	//link
blockManager.add('link', {
	label: "link",
      category: "Basic",
      attributes: { class: 'fa fa-link' },
      content: {
        type: 'link',
        content: 'Link',
        style: { color: '#d983a6' }
      }
    });

	//map
blockManager.add('map', {
      label: "map",
      category: "Basic",
      attributes: { class: 'fa fa-map-o' },
      content: {
        type: 'map',
        style: { height: '350px' }
      }
    });
	//images
blockManager.add('image', {
      label: "image",
      category: "Media",
      
      content: {
        type: 'image',
        activeOnRender: 1
      }
    });
	//vedeo
blockManager.add('video', {
      label: "video",
      category: "Media",
      attributes: { class: 'fa fa-youtube-play' },
      content: {
        type: 'video',
        src: 'img/video2.webm',
        style: {
          height: '350px',
          width: '615px'
        }
      }
    });
	//text
blockManager.add('text', {
      label: "text",
      category: "Text",
      content: {
        type: 'text',
        content: 'Insert your text here',
        activeOnRender: 1
      }
    });
	
	//sidebar
	blockManager.add('sidebar', {
    label: 'sidebare',
    category: 'section',
    
	
    content: `
  <div data-gjs-type="div" class="sidenav">
	  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
<div data-gjs-type="div" class="main">
 main
</div>
<style>.main {margin-left: 160px; padding: 0px 10px;}.sidenav {height: 100%; width: 160px;position: fixed;z-index: 1;top: 0; left: 0;background-color: #111; overflow-x: hidden; padding-top: 20px;}.sidenav a {padding: 6px 8px 6px 16px;text-decoration: none;font-size: 25px;color: #818181;display: block;}</style>
	 `
  });
  //navbar
   editor.BlockManager.add("navbar", {
      label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
          <rect class="gjs-block-svg-path" x="15" y="10" width="5" height="1"></rect>
          <rect class="gjs-block-svg-path" x="15" y="13" width="5" height="1"></rect>
          <rect class="gjs-block-svg-path" x="15" y="11.5" width="5" height="1"></rect>
        </svg>
        `,
      category: 'section',
      content: `
        <div class="navbar" data-gjs-droppable="false" data-gjs-custom-name="Navbar">
          <div class="navbar-container" data-gjs-droppable="false" data-gjs-draggable="false"
            data-gjs-removable="false" data-gjs-copyable="false" data-gjs-highlightable="false"
            data-gjs-custom-name="navbar">

            <a href="/" class="navbar-brand" data-gjs-droppable="true"></a>

            <div class="navbar-burger" data-gjs-type="burger-menu">
              <div class="navbar-burger-line" data-gjs-custom-name="Burger Line" data-gjs-droppable="false" data-gjs-draggable="false"></div>
              <div class="navbar-burger-line" data-gjs-custom-name="Burger Line" data-gjs-droppable="false" data-gjs-draggable="false"></div>
              <div class="navbar-burger-line" data-gjs-custom-name="Burger Line" data-gjs-droppable="false" data-gjs-draggable="false"></div>
            </div>

            <div class="navbar-items-c" >
              <nav class="navbar-menu">
                <a href="#" class="navbar-menu-link">Home</a>
                <a href="#" class="navbar-menu-link">About</a>
                <a href="#" class="navbar-menu-link">Contact</a>
              </nav>
            </div>

          </div>
        </div>
        <style>
    .navbar-items-c {
      display: inline-block;
      float: right;
    }

    .navbar {
      background-color: #222;
      color: #ddd;
      min-height: 50px;
      width: 100%;
    }

    .navbar-container {
      max-width: 950px;
      margin: 0 auto;
      width: 95%;
    }

    .navbar-container::after {
      content: "";
      clear: both;
      display: block;
    }

    .navbar-brand {
      vertical-align: top;
      display: inline-block;
      padding: 5px;
      min-height: 50px;
      min-width: 50px;
      color: inherit;
      text-decoration: none;
    }

    .navbar-menu {
      padding: 10px 0;
      display: block;
      float: right;
      margin: 0;
    }

    .navbar-menu-link {
      margin: 0;
      color: inherit;
      text-decoration: none;
      display: inline-block;
      padding: 10px 15px;
    }

    .navbar-burger {
      margin: 10px 0;
      width: 45px;
      padding: 5px 10px;
      display: none;
      float: right;
      cursor: pointer;
    }

    .navbar-burger-line {
      padding: 1px;
      background-color: white;
      margin: 5px 0;
    }

    @media (max-width: 768px) {
      .navbar-burger {
        display: block;
      }

      .navbar-items-c {
        display: none;
        width: 100%;
      }

      .navbar-menu {
        width: 100%;
      }

      .navbar-menu-link {
        display: block;
      }
    }
  </style>
      `,
    });
 
	blockManager.add('alert', {
    label: 'Alert',
    category: 'components',
    attributes: { class: 'fa fa-exclamation-triangle' },
    content: `
      <div class="alert alert-success" role="alert">
        <strong>Well done!</strong> You successfully read this important alert message.
      </div>
    `
  });
  
 
	//table
blockManager.add('table', {
      label: "table",
      category: "Basic",
      attributes: { class: 'table' },
      content: {
        type: 'table',
       
        
        activeOnRender: 1
      }
    });
	
	 //input
	 blockManager.add('input', {
  label: 'input',
  
  content: {
        type: 'input',
       
        activeOnRender: 1
      },
  category: 'Forms',
});
//list
 blockManager.add('list', {
  label: 'list',
  
  content: {
        type: 'list',
       
        activeOnRender: 1
      },
  category: 'Basic',
});

	 //hr
	 blockManager.add('hr', {
  label: 'Horizontal Rules',
  content: {
        type: 'hr',
        
        activeOnRender: 1
      },
 
  category: 'Text',
	 });

	//svg maker
	commands.add('svgmaker', editor => { modal.open({
	  title: "svg maker",
	  content: `<iframe src="svg/index.html" height="500" width="1000"></iframe>`
  });
	
 });
console.log('all blocks added')

panelManager.addButton('options',{
  id: 'svgmaker',
  className: 'svgmaker',
  command: 'svgmaker',
  attributes: { title: 'Some title'},
  active: false,
});
});
  //create block
  function createblock() {
	var cbid = document.getElementById("createblockid").value;
	var cblab = document.getElementById("createblocklabel").value;
	var cbcat = document.getElementById("createblockcategory").value;
	var cbtyp = document.getElementById("createblocktype").value;
	var cbcon = document.getElementById("createblockcontent").value;
	//var cbprev = document.getElementById("createblockpreview");
	
	editor.BlockManager.add(cbid, {
	label: cblab,
    category: cbcat,
    content: {
        type: cbtyp,
        content: cbcon,
        
      }
    });
}
console.log('createblock function added');
function createPage() {
	editor.Pages.add({id: document.getElementById('pageselectinput').value});
}
function removePage() {
	editor.Pages.remove(document.getElementById('pageselectinput').value);
}
function selectPage() {
	editor.Pages.select(document.getElementById('pageselectinput').value);
}
function selectelement() { 
editor.select(editor.getWrapper().find(document.getElementById("selectinput").value));}