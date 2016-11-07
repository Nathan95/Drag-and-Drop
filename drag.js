   function allowDrop(ev) {
            ev.preventDefault();
          }
          
          function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
            console.log('working dragging');
          }
          
          function dropOne(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            var content = $("#" + data);
           
            if(content.selector == "#jigsawPiece1") {
                ev.target.appendChild(document.getElementById(data));

                $(content.selector).removeClass('left');
              
                dragCheck();
                
            } else {
                console.log(content.selector);
          
            }
          }