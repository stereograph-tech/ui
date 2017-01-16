var fs = require('fs');

function build_grid(config) {
	var filename = `./${config['filename']}`;
	var classes = config['classes'];
	var GRID_BASE = config['base'];
	var GRID_UNIT = config['unit'];
	
	var css = [];

	if(!filename) {
		throw new Error('Grid filename is invalid');
	}
	if(!classes || classes.length == 0) {
		throw new Error('Grid classes are invalid');
	}

	for(var i = 0; i < classes.length; i++) {
		var class_obj = classes[i];
		if(!class_obj) {
			throw new Error('Class is invalid');
		}

		var class_name 	= class_obj['name'];
		if(!class_name) {
			throw new Error('Class name is invalid');
		}

		var properties 	= class_obj['properties'];
		if(!properties) {
			throw new Error('Properties is invalid');
		}

		var description = class_obj['description'];
		if(description) {
			css.push(`/**\n*\n* .${class_name}\n* ${description}\n*\n*/\n`);
		}

		var min 			= class_obj['min'];
		var max 			= class_obj['max'];
		var increment 		= class_obj['increment'];
		var allow_decimals 	= class_obj['decimals'];

		if(allow_decimals === true) {
			var css_arr_dec = iterate_rule(0.1, 0.9, 0.1, class_name, properties, GRID_BASE, GRID_UNIT, true);
			if(css_arr_dec && css_arr_dec.length > 0) {
				css = css.concat(css_arr_dec);
			}
		}

		if(min !== null && min !== undefined && 
			max !== null && max !== undefined && 
			increment !== null && increment !== undefined &&
			min < max && increment >= 0) {

			var css_arr = iterate_rule(min, max, increment, class_name, properties, GRID_BASE, GRID_UNIT);
			if(css_arr && css_arr.length > 0) {
				css = css.concat(css_arr);
			}
		}

		css.push('\n');

		// end classes loop
	}

	var css_text = css.join('');

	// Check if the grid css file already exists,
	// if so delete it.
	fs.exists(filename, (exists) => {
		if(exists) {
			console.log(`INFO: ${filename} already exists, overwriting...`);
			fs.unlink(filename, (err) => {
				if(err) {
					console.error(err);	
				} else {
					write_css(filename, css_text);
				}
			});
		} else {
			console.log(`OK: ${filename} does not exist, writing...`);
			write_css(filename, css_text);
		}
	});
	
}

function iterate_rule(min, max, increment, class_name, properties, grid_base, grid_unit, zero_prefix) {
	var css_arr = [];
	var count = min;
	while(count <= max) {
		var class_index = increment < 1 && zero_prefix ? new Number(count * grid_base).toFixed(0) : count;
		if(zero_prefix) {
			class_index = '0' + class_index;
		}
		css_arr.push(`.${class_name}-${class_index} { `);

		for(var v = 0; v < properties.length; v++) {
			var property = properties[v];
			if(!property) {
				continue;
			}
			var property_name = property['name']
			var value = property['value'];
			var important = property['important'] === true ? ' !important' : '';
			
			css_arr.push(`${property_name}: `);

			if(!property['value']) {
				css_arr.push(`${count}${grid_unit}${important}; `);
			} else {
				css_arr.push(`${value} ${important}; `);
			}

			// end properties loop
		}

		css_arr.push('}\n');
		count += increment;
		count = parseFloat(count.toFixed(1));
	}
	return css_arr;
}

function write_css(filename, css_text) {
	console.log(`Writing to ${filename}...`);
	fs.writeFile(filename, css_text, (write_err) => {
		if(write_err) {
			console.error(write_err);
		} else {
			console.log(`Grid CSS - build complete - ${filename}`);
		}
	});
}

var config = fs.readFile('./config.json', (err, data) => {
	if(err) {
		console.error(err);
	}

	var config = JSON.parse(data);
	
	if(!config) {
		return;
	}

	// Build the grid file
	if(config['grid']) {
		build_grid(config['grid']);
	}


});