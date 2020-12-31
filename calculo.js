// JavaScript Calculadora

x = 0;
ops = "n";
token = 0;

function cientifica(op){
	if(op=="coseno"){
		document.calculator.win.value=Math.cos(document.calculator.win.value*Math.PI/180);
		}
	if(op=="raiz"){
		document.calculator.win.value=Math.sqrt(document.calculator.win.value);
		}
	if(op=="X2"){
		document.calculator.win.value=(document.calculator.win.value*document.calculator.win.value); 
		}
	
	}

function calc(op)
{ if(!isNaN(op) || op==".")

  { if(!token)
    { if(document.calculator.win.value == 0)
      { document.calculator.win.value = op; }
      else
      { document.calculator.win.value = document.calculator.win.value + op; }
    }
    else
    { document.calculator.win.value = op;
      token = 0;
    }
    return;
  }
  else
  { 
		
	if(op=="C")
    { document.calculator.win.value = 0;
      token = 0;
      return;
    }
   
    if(op=="CE")
    { document.calculator.win.value = 0;
      return;
    }
    
    if(op=="%") 
    { document.calculator.win.value = document.calculator.win.value / 100.0;
      token = 1;
      return;
    }

    if(op=="+/-") 
    { document.calculator.win.value = -document.calculator.win.value;
      token = 1;
      return;
    }

    if(op=="+" || op=="*" || op=="/" || op=="-" || op=="=")
    { token = 1;
      if(ops!="n")
      { if(ops=="+")
        { x = x -(- document.calculator.win.value);
          document.calculator.win.value = x;
        }
        if(ops=="-")
        { x = x - document.calculator.win.value;
          document.calculator.win.value = x;
        }
        if(ops=="/")
        { x = x / document.calculator.win.value;
          document.calculator.win.value = x;
        }
        if(ops=="*")
        { x = x * document.calculator.win.value;
          document.calculator.win.value = x;
        }
      }
      else
      { x = document.calculator.win.value; }
  
      if(op!="=") { ops=op; }
      else { ops="n"; }
      return;
    }
  }
}
