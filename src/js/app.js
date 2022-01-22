// Adding an eventlistener to the document to ensure that all code will be start evaluated when the DOM is loaded

document.addEventListener("DOMContentLoaded", function(event){
    // selecting element from the DOM and saved in variabels
    const header = document.querySelector("header");
    const ul = document.querySelector("ul");
    const sections = document.querySelectorAll("section");
    
    // looping over each section in the body element
    for(let i of sections){
        // creating a li and a a element
        const liElement = document.createElement("li")
        const aElement = document.createElement("a")
        aElement.setAttribute("id",i.id+"k")

        aElement.innerText = i.id;

        // adding an eventlistener to the a element for changing his active state when clicked
        aElement.addEventListener("click",function(e){
            e.preventDefault();
            for (let z of ul.children){
                if(z.firstChild.classList.contains("active")){
                    z.firstChild.classList.toggle("active")
                }
            }
            // looping over each section element to check if active is included in the class attribute and when the awnser is yes to toggle 
            for(let y of sections){
                
                if(y.classList.contains("active")){
                    y.classList.toggle("active")
                }
            }
            i.scrollIntoView({behavior:"smooth",
                               block:"end" })
            this.classList.toggle("active")
            i.classList.toggle("active")                  
        })
        liElement.appendChild(aElement);
        ul.appendChild(liElement)
    }

    
    // adding an eventlister for highlighting the nav element and the section when it is in the viewport
    document.addEventListener("scroll", function(e){
            
            for(let i of sections){
            
            let rect = i.getBoundingClientRect()
            const navElement = this.getElementById(i.id+"k")
            
            if(rect.top >= -517 && rect.bottom <= 1552){
                i.classList.add("active")
                
                navElement.classList.add("active")
                
            }else{
                i.classList.remove("active")
                navElement.classList.remove("active")
            
        }
    }
        
    })

   
 // blending the nav out when it is no scrolled about 5 seconds
    document.addEventListener("scroll", function(e){
        
        let scrollPos
        window.setTimeout(function(e){
            if(scrollPos ===document.body.getBoundingClientRect().top){
                header.style.display = "none"
            }
            
        },5000)
           
        scrollPos = document.body.getBoundingClientRect().top;
        header.style.display ="block"    
            
        
        
        
         
    })

   

    
})