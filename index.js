import RegistroPresentacion from "./Tests/segundoTest.js"
import ConfigAutomaticTest from "./config/config.js"


async function main(){
    
    let driver = await ConfigAutomaticTest.initConfig()   

    await(new RegistroPresentacion(driver).CP_1())

    await(new RegistroPresentacion(driver).CP_2())

    await(new RegistroPresentacion(driver).CP_3())

    await(new RegistroPresentacion(driver).CP_4())

    await(new RegistroPresentacion(driver).CP_5())
    
    await(new RegistroPresentacion(driver).CP_6());
    
    await(new RegistroPresentacion(driver).CP_7());
    
    await(new RegistroPresentacion(driver).CP_8()); 
    
    await(new RegistroPresentacion(driver).CP_9());

    await(new RegistroPresentacion(driver).CP_10()); 
    
    await(new RegistroPresentacion(driver).CP_11());

    await(new RegistroPresentacion(driver).CP_12()); 
    
    await(new RegistroPresentacion(driver).CP_13());

   
}

main()