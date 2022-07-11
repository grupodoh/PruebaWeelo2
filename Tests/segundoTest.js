import Comands from "../Comandos/Comands.js"

export default class RegistroPresentacion extends Comands{
    constructor(driver){
        super(driver);
    }

  
   
    
    async CP_1(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
       
       await this.delay(4);
                                                   
    }
    
    async CP_2(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
    
        // se realiza una espera de 1 segundos 
        await this.delay(1);
       //
       let presentacion = await this.getElementById("addressBtn");
    
       await this.click(presentacion);
    
       // se realiza una espera de 1 segundos 
       await this.delay(1);
    
       let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                       
       await this.click(Calendario);
    
       await this.delay(2);
    
       let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                   //span[@class='fc-icon fc-icon-chevron-right']
       await this.click(moverMes);
    
       await this.delay(2);
    
       await this.click(moverMes);
    
       await this.delay(2);
    
       let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                   //a[normalize-space()='12']
       await this.click(selecDia);
       
       await this.delay(4);
                                                   
    }
    
    async CP_3(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
    
        // se realiza una espera de 1 segundos 
        await this.delay(1);
       //
       let presentacion = await this.getElementById("addressBtn");
    
       await this.click(presentacion);
    
       // se realiza una espera de 1 segundos 
       await this.delay(1);
    
       let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                       
       await this.click(Calendario);
    
       await this.delay(2);
    
       let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                   //span[@class='fc-icon fc-icon-chevron-right']
       await this.click(moverMes);
    
       await this.delay(2);
    
       await this.click(moverMes);
    
       await this.delay(2);
    
       let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                   //a[normalize-space()='12']
       await this.click(selecDia);
    
       await this.delay(2);
    
       let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[3]//span[1]");
                                                  
       await this.click(selecHora);
       
       await this.delay(4);
                                                   
    }
   
    async CP_4(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
    
        // se realiza una espera de 1 segundos 
        await this.delay(1);
       //
       let presentacion = await this.getElementById("addressBtn");
    
       await this.click(presentacion);
    
       // se realiza una espera de 1 segundos 
       await this.delay(1);
    
       let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                       
       await this.click(Calendario);
    
       await this.delay(2);
    
       let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                   //span[@class='fc-icon fc-icon-chevron-right']
       await this.click(moverMes);
    
       await this.delay(2);
    
       await this.click(moverMes);
    
       await this.delay(2);
    
       let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                   //a[normalize-space()='12']
       await this.click(selecDia);
    
       await this.delay(2);
    
       let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[2]//span[1]");
                                                  
       await this.click(selecHora);
       
       await this.delay(4);
                                                   
    }
    
    async CP_5(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
    
        // se realiza una espera de 1 segundos 
        await this.delay(1);
       //
       let presentacion = await this.getElementById("addressBtn");
    
       await this.click(presentacion);
    
       // se realiza una espera de 1 segundos 
       await this.delay(1);
    
       let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                       
       await this.click(Calendario);
    
       await this.delay(2);
    
       let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                   //span[@class='fc-icon fc-icon-chevron-right']
       await this.click(moverMes);
    
       await this.delay(2);
    
       await this.click(moverMes);
    
       await this.delay(2);
    
       let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                   //a[normalize-space()='12']
       await this.click(selecDia);
    
       await this.delay(2);
    
       let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[4]//span[1]");
                                                  
       await this.click(selecHora);
       
       await this.delay(4);
                                                   
    }
    
    async CP_6(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
    
        // se realiza una espera de 1 segundos 
        await this.delay(1);
       //
       let presentacion = await this.getElementById("addressBtn");
    
       await this.click(presentacion);
    
       // se realiza una espera de 1 segundos 
       await this.delay(1);
    
       let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                       
       await this.click(Calendario);
    
       await this.delay(2);
    
       let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                   //span[@class='fc-icon fc-icon-chevron-right']
       await this.click(moverMes);
    
       await this.delay(2);
    
       await this.click(moverMes);
    
       await this.delay(2);
    
       let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                   //a[normalize-space()='12']
       await this.click(selecDia);
    
       await this.delay(2);
    
       let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[3]//span[1]");
                                                   //span[@class='initial-time'][normalize-space()='1 PM']
       await this.click(selecHora);
    
       await this.delay(2);
    
       let llamada = await this.getElementByxPath("//span[normalize-space()='Llamada en Zoom']");
    
       await this.click(llamada);
       
       await this.delay(4);
                                                   
    }

    async CP_7(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
    
        // se realiza una espera de 1 segundos 
        await this.delay(1);
       //
       let presentacion = await this.getElementById("addressBtn");
    
       await this.click(presentacion);
    
       // se realiza una espera de 1 segundos 
       await this.delay(1);
    
       let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                       
       await this.click(Calendario);
    
       await this.delay(2);
    
       let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                   //span[@class='fc-icon fc-icon-chevron-right']
       await this.click(moverMes);
    
       await this.delay(2);
    
       await this.click(moverMes);
    
       await this.delay(2);
    
       let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                   //a[normalize-space()='12']
       await this.click(selecDia);
    
       await this.delay(2);
    
       let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[3]//span[1]");
                                                   //span[@class='initial-time'][normalize-space()='1 PM']
       await this.click(selecHora);
       
       await this.delay(4);
                                                   
    }
    
    async CP_8(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
    
        // se realiza una espera de 1 segundos 
        await this.delay(1);
       //
       let presentacion = await this.getElementById("addressBtn");
    
       await this.click(presentacion);
    
       // se realiza una espera de 1 segundos 
       await this.delay(1);
    
       let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                       
       await this.click(Calendario);
    
       await this.delay(2);
    
       let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                   //span[@class='fc-icon fc-icon-chevron-right']
       await this.click(moverMes);
    
       await this.delay(2);
    
       await this.click(moverMes);
    
       await this.delay(2);
    
       let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                   //a[normalize-space()='12']
       await this.click(selecDia);
    
       await this.delay(2);
    
       let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[3]//span[1]");
                                                   //span[@class='initial-time'][normalize-space()='1 PM']
       await this.click(selecHora);
    
       await this.delay(2);
    
       let llamada = await this.getElementByxPath("//span[normalize-space()='Llamada en Zoom']");
    
       await this.click(llamada);
    
       await this.delay(2);
    
       let correo = await this.getElementById("frmScheduleLeadModal-email");
    
       await this.sendKey(correo,"juanmonca1075@gmail.com");
       
       await this.delay(4);
                                                   
    }
    
    async CP_9(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
    
        // se realiza una espera de 1 segundos 
        await this.delay(1);
       //
       let presentacion = await this.getElementById("addressBtn");
    
       await this.click(presentacion);
    
       // se realiza una espera de 1 segundos 
       await this.delay(1);
    
       let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                       
       await this.click(Calendario);
    
       await this.delay(2);
    
       let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                   //span[@class='fc-icon fc-icon-chevron-right']
       await this.click(moverMes);
    
       await this.delay(2);
    
       await this.click(moverMes);
    
       await this.delay(2);
    
       let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                   //a[normalize-space()='12']
       await this.click(selecDia);
    
       await this.delay(2);
    
       let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[3]//span[1]");
                                                   //span[@class='initial-time'][normalize-space()='1 PM']
       await this.click(selecHora);
    
       await this.delay(2);
    
       let llamada = await this.getElementByxPath("//span[normalize-space()='Llamada en Zoom']");
    
       await this.click(llamada);
    
       await this.delay(2);
    
       let correo = await this.getElementById("frmScheduleLeadModal-email");
    
       await this.sendKey(correo,"juanmonca1075@gmail.com");
    
       await this.delay(2);
    
       let botonAgendar = await this.getElementById("btnSendModal");
    
       await this.click(botonAgendar);
       
       await this.delay(4);
                                                   
    }
    
    async CP_10(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
    
        // se realiza una espera de 1 segundos 
        await this.delay(1);
       //
       let presentacion = await this.getElementById("addressBtn");
    
       await this.click(presentacion);
    
       // se realiza una espera de 1 segundos 
       await this.delay(1);
    
       let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                       
       await this.click(Calendario);
    
       await this.delay(2);
    
       let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                   //span[@class='fc-icon fc-icon-chevron-right']
       await this.click(moverMes);
    
       await this.delay(2);
    
       await this.click(moverMes);
    
       await this.delay(2);
    
       let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                   //a[normalize-space()='12']
       await this.click(selecDia);
    
       await this.delay(2);
    
       let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[3]//span[1]");
                                                   //span[@class='initial-time'][normalize-space()='1 PM']
       await this.click(selecHora);
    
       await this.delay(2);
    
       let llamada = await this.getElementByxPath("//span[normalize-space()='Llamada en Zoom']");
    
       await this.click(llamada);
    
       await this.delay(2);
    
       let correo = await this.getElementById("frmScheduleLeadModal-email");
    
       await this.sendKey(correo,"juanmonca1075@gmail.com");
    
       await this.delay(2);
    
       let botonAgendar = await this.getElementById("btnSendModal");
    
       await this.click(botonAgendar);
    
       await this.delay(3);
    
       let nombreUsuario = await this.getElementById("frmScheduleLeadModal-name");        
    
       await this.sendKey(nombreUsuario, "Juan Diego Moncaleano Quiñones");
       
       await this.delay(4);
                                                   
    }

    async CP_11(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);
    
        await this.newGetUrl();
    
        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");
    
        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);
    
        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);
    
        // se realiza una espera de 1 segundos 
        await this.delay(1);
       //
       let presentacion = await this.getElementById("addressBtn");
    
       await this.click(presentacion);
    
       // se realiza una espera de 1 segundos 
       await this.delay(1);
    
       let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                       
       await this.click(Calendario);
    
       await this.delay(2);
    
       let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                   //span[@class='fc-icon fc-icon-chevron-right']
       await this.click(moverMes);
    
       await this.delay(2);
    
       await this.click(moverMes);
    
       await this.delay(2);
    
       let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                   //a[normalize-space()='12']
       await this.click(selecDia);
    
       await this.delay(2);
    
       let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[3]//span[1]");
                                                   //span[@class='initial-time'][normalize-space()='1 PM']
       await this.click(selecHora);
    
       await this.delay(2);
    
       let llamada = await this.getElementByxPath("//span[normalize-space()='Llamada en Zoom']");
    
       await this.click(llamada);
    
       await this.delay(2);
    
       let correo = await this.getElementById("frmScheduleLeadModal-email");
    
       await this.sendKey(correo,"juanmonca1075@gmail.com");
    
       await this.delay(2);
    
       let botonAgendar = await this.getElementById("btnSendModal");
    
       await this.click(botonAgendar);
    
       await this.delay(3);
    
       let nombreUsuario = await this.getElementById("frmScheduleLeadModal-name");        
    
       await this.sendKey(nombreUsuario, "Juan Diego Moncaleano Quiñones");
    
       await this.delay(2);
    
       let telefonoUsuario = await this.getElementByxPath("//div[@class='col input-container lead__input-container lead__input-container--phone lead__input-container--with-border flag-group']//input[@id='phone']");
                                                           
       await this.delay(2);
    
       await this.sendKey(telefonoUsuario, "3204434172");
       
       await this.delay(4);
                                                   
    }

    async CP_12(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);

            // luego de realizar la espera maximiza la pantalla
            await this.maximizeWindow();

            // ahora introduce la url en la barra de direcciones del navegador.
            await this.getUrl("https://uat.millionandup.com/");

            // ahora se realiza una espera de 2 segundos 
            await this.delay(5);

            // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
            await this.scroll(0,10000);

            // se realiza una espera de 1 segundos 
            await this.delay(1);
        //
        let presentacion = await this.getElementById("addressBtn");

        await this.click(presentacion);

        // se realiza una espera de 1 segundos 
        await this.delay(1);

        let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                        
        await this.click(Calendario);

        await this.delay(2);

        let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                    //span[@class='fc-icon fc-icon-chevron-right']
        await this.click(moverMes);

        await this.delay(2);

        await this.click(moverMes);

        await this.delay(2);

        let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                    //a[normalize-space()='12']
        await this.click(selecDia);

        await this.delay(2);

        let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[3]//span[1]");
                                                    //span[@class='initial-time'][normalize-space()='1 PM']
        await this.click(selecHora);

        await this.delay(2);

        let llamada = await this.getElementByxPath("//span[normalize-space()='Llamada en Zoom']");

        await this.click(llamada);

        await this.delay(2);

        let correo = await this.getElementById("frmScheduleLeadModal-email");

        await this.sendKey(correo,"juanmonca1075@gmail.com");

        await this.delay(2);

        let botonAgendar = await this.getElementById("btnSendModal");

        await this.click(botonAgendar);

        await this.delay(3);

        let nombreUsuario = await this.getElementById("frmScheduleLeadModal-name");        

        await this.sendKey(nombreUsuario, "Juan Diego Moncaleano Quiñones");

        await this.delay(2);

        let telefonoUsuario = await this.getElementByxPath("//div[@class='col input-container lead__input-container lead__input-container--phone lead__input-container--with-border flag-group']//input[@id='phone']");
                                                            
        await this.delay(2);

        await this.sendKey(telefonoUsuario, "3204434172");

        await this.delay(2);

        await this.click(botonAgendar);

        await this.delay(3);   


                                                    
    }

    async CP_13(){

        // despues de abrir el navegador espera 2 segundos
        await this.delay(1);

        await this.maximizeWindow();

        await this.delay(1);

        await this.newGetUrl();

        // ahora introduce la url en la barra de direcciones del navegador.
        await this.getUrl("https://uat.millionandup.com/");

        // ahora se realiza una espera de 2 segundos 
        await this.delay(5);

        // aquí se desplaza la pantalla hacia abajo haciendo un scroll 150px
        await this.scroll(0,10000);

        // se realiza una espera de 1 segundos 
        await this.delay(1);
    //
    let presentacion = await this.getElementById("addressBtn");

    await this.click(presentacion);

    // se realiza una espera de 1 segundos 
    await this.delay(1);

    let Calendario = await this.getElementByxPath("//i[@class='icon-arrow-down']");
                                                    
    await this.click(Calendario);

    await this.delay(2);

    let moverMes = await this.getElementByxPath("//span[@class='fc-icon fc-icon-chevron-right']");
                                                //span[@class='fc-icon fc-icon-chevron-right']
    await this.click(moverMes);

    await this.delay(2);

    await this.click(moverMes);

    await this.delay(2);

    let selecDia = await this.getElementByxPath("//a[normalize-space()='12']");
                                                //a[normalize-space()='12']
    await this.click(selecDia);

    await this.delay(2);

    let selecHora = await this.getElementByxPath("//div[@id='sectionSchedule']//li[3]//span[1]");
                                                //span[@class='initial-time'][normalize-space()='1 PM']
    await this.click(selecHora);

    await this.delay(2);

    let llamada = await this.getElementByxPath("//span[normalize-space()='Llamada en Zoom']");

    await this.click(llamada);

    await this.delay(2);

    let correo = await this.getElementById("frmScheduleLeadModal-email");

    await this.sendKey(correo,"juanmonca1075@gmail.com");

    await this.delay(2);

    let botonAgendar = await this.getElementById("btnSendModal");

    await this.click(botonAgendar);

    await this.delay(3);

    let nombreUsuario = await this.getElementById("frmScheduleLeadModal-name");        

    await this.sendKey(nombreUsuario, "Juan Diego Moncaleano Quiñones");

    await this.delay(2);

    let telefonoUsuario = await this.getElementByxPath("//div[@class='col input-container lead__input-container lead__input-container--phone lead__input-container--with-border flag-group']//input[@id='phone']");
                                                        
    await this.delay(2);

    await this.sendKey(telefonoUsuario, "3204434172");

    await this.delay(2);

    await this.click(botonAgendar);

    await this.delay(6);

    let btnFinal = await this.getElementByxPath("//span[@class='btn-close-modal text first_word_bold btn-black__text']");

    await  this.click(btnFinal);

    await this.delay(3);

    await this.scroll(0,-10000);

    await this.delay(3);
    
    await this.close();

                                                    
    }


}

  