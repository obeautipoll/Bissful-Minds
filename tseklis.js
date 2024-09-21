  const pampam = document.getElementById('pampam');
  const tinago = document.getElementById('tinago');
  const esplanade = document.getElementById('esplanade');
  const mt_a = document.getElementById('mt-agad-agad');
  const mimbalot = document.getElementById('mimbalot');
  const cathedral = document.getElementById('cathedral');
  const ctree = document.getElementById('ctree');

  const ctrees = document.querySelectorAll('.ctrees');
  const cathedrals = document.querySelectorAll('.cathedrals');
  const mimbalots = document.querySelectorAll('.mimbalots');
  const mt = document.querySelectorAll('.mt');
  const esplanades = document.querySelectorAll('.esplanades');
  const pampams = document.querySelectorAll('.pampams');
  const tinags = document.querySelectorAll('.tinags');
  const bg = document.getElementById("main-container");
  const header = document.getElementById('header')
  const context = document.getElementById('context')

pampam.addEventListener('click',function(){
    tinago.style.display = "block";
    tinags.forEach(tinags =>tinags.style.display = "none");
    pampam.style.display = "none ";
    pampams.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/pampam.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.transition = '.5s ease'; 
    }) 

    
esplanade.addEventListener('click',function(){
    tinago.style.display = "block";
    tinags.forEach(tinags =>tinags.style.display = "none");
    esplanade.style.display = "none ";
    esplanades.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/esplanade.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.transition = '.5s ease'
    })

mt_a.addEventListener('click',function(){
    tinago.style.display = "block";
    tinags.forEach(tinags =>tinags.style.display = "none");
    mt_a.style.display = "none ";
    mt.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mt_a.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.transition = '.5s ease'
    })  
mimbalot.addEventListener('click',function(){
    tinago.style.display = "block";
    tinags.forEach(tinags =>tinags.style.display = "none");
    mimbalot.style.display = "none ";
    mimbalots.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mimbalot.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.transition = '.5s ease'
    })
cathedral.addEventListener('click',function(){
    tinago.style.display = "block";
    tinags.forEach(tinags =>tinags.style.display = "none");
    cathedral.style.display = "none ";
    cathedrals.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/cathedral.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.transition = '.5s ease'
    }) 
ctree.addEventListener('click',function(){
    tinago.style.display = "block";
    tinags.forEach(tinags =>tinags.style.display = "none");
    ctree.style.display = "none ";
    ctrees.forEach(pampam =>pampam.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/c3.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.transition = '.5s ease'
    })



tinago.addEventListener('click',function(){
    pampam.style.display = "block";
    pampams.forEach(tinags =>tinags.style.display = "none");
    tinago.style.display = "none ";
    tinags.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/tinago.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    bg.style.transition = '.5s ease'
    })

esplanade.addEventListener('click',function(){
    pampam.style.display = "block";
    pampams.forEach(tinags =>tinags.style.display = "none");
    esplanade.style.display = "none ";
    esplanades.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/esplanade.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
mt_a.addEventListener('click',function(){
    pampam.style.display = "block";
    pampams.forEach(tinags =>tinags.style.display = "none");
    mt_a.style.display = "none ";
    mt.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mt_a.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    }) 

mimbalot.addEventListener('click',function(){
    pampam.style.display = "block";
    pampams.forEach(tinags =>tinags.style.display = "none");
    mimbalot.style.display = "none ";
    mimbalots.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mimbalot.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
cathedral.addEventListener('click',function(){
    pampam.style.display = "block";
    pampams.forEach(tinags =>tinags.style.display = "none");
    cathedral.style.display = "none ";
    cathedrals.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/cathedral.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
ctree.addEventListener('click',function(){
    pampam.style.display = "block";
    pampams.forEach(tinags =>tinags.style.display = "none");
    ctree.style.display = "none ";
    ctrees.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/c3.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    }) 


tinago.addEventListener('click',function(){
    esplanade.style.display = "block";
    esplanades.forEach(tinags =>tinags.style.display = "none");
    tinago.style.display = "none ";
    tinags.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/tinago.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
    
pampam.addEventListener('click',function(){
    esplanade.style.display = "block";
    esplanades.forEach(tinags =>tinags.style.display = "none");
    pampam.style.display = "none ";
    pampams.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/pampam.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
mt_a.addEventListener('click',function(){
    esplanade.style.display = "block";
    esplanades.forEach(tinags =>tinags.style.display = "none");
    mt_a.style.display = "none ";
    mt.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mt_a.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    }) 
    
mimbalot.addEventListener('click',function(){
    esplanade.style.display = "block";
    esplanades.forEach(tinags =>tinags.style.display = "none");
    mimbalot.style.display = "none ";
    mimbalots.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mimbalot.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
        })
cathedral.addEventListener('click',function(){
    esplanade.style.display = "block";
    esplanades.forEach(tinags =>tinags.style.display = "none");
    cathedral.style.display = "none ";
    cathedrals.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/cathedral.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
ctree.addEventListener('click',function(){
    esplanade.style.display = "block";
    esplanades.forEach(tinags =>tinags.style.display = "none");
    ctree.style.display = "none ";
    ctrees.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/c3.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })

tinago.addEventListener('click',function(){
    mt_a.style.display = "block";
    mt.forEach(tinags =>tinags.style.display = "none");
    tinago.style.display = "none ";
    tinags.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/tinago.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
        
pampam.addEventListener('click',function(){
    mt_a.style.display = "block";
    mt.forEach(tinags =>tinags.style.display = "none");
    pampam.style.display = "none ";
    pampams.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/pampam.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
esplanade.addEventListener('click',function(){
    mt_a.style.display = "block";
    mt.forEach(tinags =>tinags.style.display = "none");
    esplanade.style.display = "none ";
    esplanades.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/esplanade.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    }) 
        
mimbalot.addEventListener('click',function(){
    mt_a.style.display = "block";
    mt.forEach(tinags =>tinags.style.display = "none");
    mimbalot.style.display = "none ";
    mimbalots.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mimbalot.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
cathedral.addEventListener('click',function(){
    mt_a.style.display = "block";
    mt.forEach(tinags =>tinags.style.display = "none");
    cathedral.style.display = "none ";
    cathedrals.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/cathedral.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
ctree.addEventListener('click',function(){
    mt_a.style.display = "block";
    mt.forEach(tinags =>tinags.style.display = "none");
    ctree.style.display = "none ";
    ctrees.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/c3.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })

tinago.addEventListener('click',function(){
    mimbalot.style.display = "block";
    mimbalots.forEach(tinags =>tinags.style.display = "none");
    tinago.style.display = "none ";
    tinags.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/tinago.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
            
pampam.addEventListener('click',function(){
    mimbalot.style.display = "block";
    mimbalots.forEach(tinags =>tinags.style.display = "none");
    pampam.style.display = "none ";
    pampams.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/pampam.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
esplanade.addEventListener('click',function(){
    mimbalot.style.display = "block";
    mimbalots.forEach(tinags =>tinags.style.display = "none");
    esplanade.style.display = "none ";
    esplanades.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/esplanade.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    }) 
            
mt_a.addEventListener('click',function(){
    mimbalot.style.display = "block";
    mimbalots.forEach(tinags =>tinags.style.display = "none");
    mt_a.style.display = "none ";
    mt.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mt_a.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
cathedral.addEventListener('click',function(){
    mimbalot.style.display = "block";
    mimbalots.forEach(tinags =>tinags.style.display = "none");
    cathedral.style.display = "none ";
    cathedrals.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/cathedral.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
ctree.addEventListener('click',function(){
    mimbalot.style.display = "block";
    mimbalots.forEach(tinags =>tinags.style.display = "none");
    ctree.style.display = "none ";
    ctrees.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/c3.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
    
tinago.addEventListener('click',function(){
    cathedral.style.display = "block";
    cathedrals.forEach(tinags =>tinags.style.display = "none");
    tinago.style.display = "none ";
    tinags.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/tinago.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
                
pampam.addEventListener('click',function(){
    cathedral.style.display = "block";
    cathedrals.forEach(tinags =>tinags.style.display = "none");
    pampam.style.display = "none ";
    pampams.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/pampam.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
esplanade.addEventListener('click',function(){
    cathedral.style.display = "block";
    cathedrals.forEach(tinags =>tinags.style.display = "none");
    esplanade.style.display = "none ";
    esplanades.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/esplanade.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    }) 
                
mt_a.addEventListener('click',function(){
    cathedral.style.display = "block";
    cathedrals.forEach(tinags =>tinags.style.display = "none");
    mt_a.style.display = "none ";
    mt.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mt_a.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
mimbalot.addEventListener('click',function(){
    cathedral.style.display = "block";
    cathedrals.forEach(tinags =>tinags.style.display = "none");
    mimbalot.style.display = "none ";
    mimbalots.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mimbalot.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
ctree.addEventListener('click',function(){
    cathedral.style.display = "block";
    cathedrals.forEach(tinags =>tinags.style.display = "none");
    ctree.style.display = "none ";
    ctrees.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/c3.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })

tinago.addEventListener('click',function(){
    ctree.style.display = "block";
    ctrees.forEach(tinags =>tinags.style.display = "none");
    tinago.style.display = "none ";
    tinags.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/tinago.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
                    
 pampam.addEventListener('click',function(){
    ctree.style.display = "block";
    ctrees.forEach(tinags =>tinags.style.display = "none");
    pampam.style.display = "none ";
    pampams.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/pampam.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
esplanade.addEventListener('click',function(){
    ctree.style.display = "block";
    ctrees.forEach(tinags =>tinags.style.display = "none");
    esplanade.style.display = "none ";
    esplanades.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/esplanade.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    }) 
                    
mt_a.addEventListener('click',function(){
    ctree.style.display = "block";
    ctrees.forEach(tinags =>tinags.style.display = "none");
    mt_a.style.display = "none ";
    mt.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mt_a.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
mimbalot.addEventListener('click',function(){
    ctree.style.display = "block";
    ctrees.forEach(tinags =>tinags.style.display = "none");
    mimbalot.style.display = "none ";
    mimbalots.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/mimbalot.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })
cathedral.addEventListener('click',function(){
    ctree.style.display = "block";
    ctrees.forEach(tinags =>tinags.style.display = "none");
    cathedral.style.display = "none ";
    cathedrals.forEach(pampams =>pampams.style.display = "block");
    bg.style.backgroundImage = "url('/tseklis/img/cathedral.jpg')";
    bg.style.backgroundPosition = "center";
    bg.style.backgroundSize = "cover";
    })


document.getElementById('tinagsbox').addEventListener("change",function(){
    document.getElementById('tinagsp');
    if(this.checked){
        document.getElementById("tinagsp").style.display = 'block';
        document.getElementById("tinagsp").style.animation = 'boxing .5s forwards';
    } else{
        document.getElementById("tinagsp").style.display = 'none';
    }
      
})


document.getElementById('esplanadesbox').addEventListener("change",function(){
    document.getElementById('esplanadesp');
    if(this.checked){
        document.getElementById("esplanadesp").style.display = 'block';
        document.getElementById("esplanadesp").style.animation = 'boxing .5s forwards';
    } else{
        document.getElementById("esplanadesp").style.display = 'none';

    }
})
document.getElementById('mtbox').addEventListener("change",function(){
    document.getElementById('mtp');
    if(this.checked){
        document.getElementById("mtp").style.display = 'block';
        document.getElementById("mtp").style.animation = 'boxing .5s forwards';
    } else{
        document.getElementById("mtp").style.display = 'none';
    }
})
document.getElementById('mimbalotsbox').addEventListener("change",function(){
    document.getElementById('mimbalotsp');
    if(this.checked){
        document.getElementById("mimbalotsp").style.display = 'block';
        document.getElementById("mimbalotsp").style.animation = 'boxing .5s forwards';
    } else{
        document.getElementById("mimbalotsp").style.display = 'none';
    }
})
document.getElementById('cathedralsbox').addEventListener("change",function(){
    document.getElementById('cathedralsp');
    if(this.checked){
        document.getElementById("cathedralsp").style.display = 'block';
        document.getElementById("cathedralsp").style.animation = 'boxing .5s forwards';
    } else{
        document.getElementById("cathedralsp").style.display = 'none';
    }
})
document.getElementById('ctreesbox').addEventListener("change",function(){
    document.getElementById('ctreesp');
    if(this.checked){
        document.getElementById("ctreesp").style.display = 'block';
        document.getElementById("ctreesp").style.animation = 'boxing .5s forwards';
    } else{
        document.getElementById("ctreesp").style.display = 'none';
    }
})
document.getElementById('pampamsbox').addEventListener("change",function(){
    document.getElementById('pampamsp');
    if(this.checked){
        document.getElementById("pampamsp").style.display = 'block';
        document.getElementById("pampamsp").style.animation = 'boxing .5s forwards';
    } else{
        document.getElementById("pampamsp").style.display = 'none';
    }
})
// local storage js


function saveCheckboxState(id) {
    const checkbox = document.getElementById(id);
    localStorage.setItem(id + 'State', checkbox.checked);
}

function loadCheckboxState(id) {
    const checkbox = document.getElementById(id);
    const checked = localStorage.getItem(id + 'State') === 'true';
    checkbox.checked = checked;
    if (id === 'tinagsbox') {
        const tinagsp = document.getElementById('tinagsp');
        if (checked) {
            tinagsp.style.display = 'block';
            tinagsp.style.animation = 'boxing .5s forwards';
        } else {
            tinagsp.style.display = 'none';
        }
    }
    if (id === 'pampamsbox') {
        const tinagsp = document.getElementById('pampamsp');
        if (checked) {
            tinagsp.style.display = 'block';
            tinagsp.style.animation = 'boxing .5s forwards';
        } else {
            tinagsp.style.display = 'none';
        }
    }
    if (id === 'esplanadesbox') {
        const tinagsp = document.getElementById('esplanadesp');
        if (checked) {
            tinagsp.style.display = 'block';
            tinagsp.style.animation = 'boxing .5s forwards';
        } else {
            tinagsp.style.display = 'none';
        }
    }
    if (id === 'mimbalotsbox') {
        const tinagsp = document.getElementById('mimbalotsp');
        if (checked) {
            tinagsp.style.display = 'block';
            tinagsp.style.animation = 'boxing .5s forwards';
        } else {
            tinagsp.style.display = 'none';
        }
    }
    if (id === 'ctreesbox') {
        const tinagsp = document.getElementById('ctreesp');
        if (checked) {
            tinagsp.style.display = 'block';
            tinagsp.style.animation = 'boxing .5s forwards';
        } else {
            tinagsp.style.display = 'none';
        }
    }
    if (id === 'cathedralsbox') {
        const tinagsp = document.getElementById('cathedralsp');
        if (checked) {
            tinagsp.style.display = 'block';
            tinagsp.style.animation = 'boxing .5s forwards';
        } else {
            tinagsp.style.display = 'none';
        }
    }
    if (id === 'mtbox') {
        const tinagsp = document.getElementById('mtp');
        if (checked) {
            tinagsp.style.display = 'block';
            tinagsp.style.animation = 'boxing .5s forwards';
        } else {
            tinagsp.style.display = 'none';
        }
    }
}

function initializeCheckbox(id) {
    loadCheckboxState(id);
    document.getElementById(id).addEventListener('change', () => {
        saveCheckboxState(id);
        loadCheckboxState(id);
    });
}

window.onload = () => {
    initializeCheckbox('mimbalotsbox');
    initializeCheckbox('esplanadesbox');
    initializeCheckbox('pampamsbox');
    initializeCheckbox('ctreesbox');
    initializeCheckbox('cathedralsbox');
    initializeCheckbox('mtbox');
    initializeCheckbox('tinagsbox');
};

