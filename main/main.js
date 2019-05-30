"use strict"

module.exports = function main(inputs) {
    // write your code here...
    let summary = 0;
    
    	if(inputs.distance <= 2){
    		if(inputs.parkTime === 0){
	    			summary = 6;
		    	}else{
		    		summary = 6 + inputs.parkTime * 0.25;
		    		}
			    }else{
	    			if(inputs.distance <= 8){
	    				if(inputs.parkTime ===0){
	    					summary = 6 + (inputs.distance - 2) * 0.8;
	    				}else{
	    					summary = 6 + (inputs.distance - 2) * 0.8 + inputs.parkTime * 0.25;
	    				}
	    			}else{
	    				if(inputs.parkTime === 0){
	    					summary = 6 + 6 * 0.8 + (inputs.distance - 8) * 1.2;
	    				}else{
	    					summary = 6 + 6 * 0.8 + (inputs.distance - 8) * 1.2 + inputs.parkTime * 0.25;
		    			}
		    		}
				}
    return Math.round(summary);
};
