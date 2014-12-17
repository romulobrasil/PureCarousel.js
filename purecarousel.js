/* 
 * =================================
 * PureCarousel.js
 * http://romulobrasil.com
 * Copyright (c) 2014 Rômulo Brasil
 * =================================
 */

'use strict';
var PureCarousel = function() {
    return {
        init : function(element) {            
            var el             = document.querySelector(element);
            var elementLi      = element + " li";
            var elLi           = document.querySelector(elementLi);
            var largLi         = elLi.offsetWidth;
            var left           = el.offsetLeft;
            var quantLi        = el.children.length;
            
            /* DATA */
            var next           = document.querySelector(el.dataset.next);
            var prev           = document.querySelector(el.dataset.prev);
            var amount         = el.dataset.amount; // Quantidade de Avanço do carousel 
            var row            = el.dataset.row; // Quantidade de Linhas deve ter o Carousel
            
            if (amount === undefined || amount <= 0) {
                amount = 1;
            }
            
            if (row === undefined || row <= 0) {
                row = 1;
            }
            
            var halfLiPar      = quantLi/row;
            var halfLiImpar    = (quantLi+1)/row;
            var quantProxImpar = (halfLiImpar-3) * largLi;
            var quantProxPar   = (halfLiPar-3) * largLi;
            
            /* Function */
            if( quantLi%2 === 0) {
                var width = "" + largLi * halfLiPar + "px";
                el.style.width = width;
                
                next.addEventListener("click", function(){
                    
                    if (left >= quantProxPar) {
                        el.style.left = -quantProxPar + "px";
                    } else {
                        el.style.left = -(left+=largLi*amount) + "px";
                    }
                });
               
            } else {
                var width = "" + largLi * halfLiImpar + "px";	
                el.style.width = width;
                
                next.addEventListener("click", function(){
                    if (left >= quantProxImpar) {
                        el.style.left = -quantProxImpar + "px";
                    } else {
                        el.style.left = -(left+=largLi*amount) + "px";
                    }
                });
           }
            
            prev.addEventListener("click", function(){
                if (left === 0) {
                    el.style.left = 0;
                } else {
                    el.style.left = -(left-=largLi*amount) + "px";
                }
            });
        }
    };
}();
