## Diseño UX/UI MVP Prompty 🎨  
 

**Objetivo:** Registrar las decisiones de diseño de experiencia e interfaz del MVP de Prompty, incluyendo el flujo del usuario.  
_Responsive inicial para android (pensando en emprendedores que trabajan unicamente con el celular)._  
 

---

### **Flujo principal (Happy Path)**  
 

1.   **Pantalla de bienvenida:** con el nombre de la herramienta y el propposito, ademas del ingreso al aplicativo.
2.  **Carga de datos contextuales (Opcional):** A fines de generar una experiencia más personalizada de acuerdo a la PyME (clientes, productos, servicios, etc).
3.  **Generador de correos:** Imput del prompt y elección del tipo de correo a generar.
4.  **Vista previa:** El usuario puede visualizar si la información generada está ok, y enviarlo de manera automatica a su correo electronico.  
      
    ![Versión Lo-Fi Promtpy](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/af01b5df5f51e30757b30518cb4f83c5f7244489b4402710.png)  
     
    
    ### F**lowchart TD**
    
        A\[Inicio\] --> B\[Carga de datos opcional\]  
        B --> C\[Escribir o seleccionar prompt\]  
        C --> D\[Pantalla de carga con animación\]  
        D --> E\[Vista previa del correo generado\]  
        E --> F\[CTA: simular envío\]
    
    ### Componentes clave
    
    1\. Bienvenida: _Introducir Prompty + comenzar Logo · CTA “Comenzar”_  
    2\. Carga de datos: _Subir archivo opcional para personalización - Input de archivo · Dropdown tipo de info adjunta._  
    3\. Prompt y generación: _Dropdown de tipo de mail · Input de texto libre · Botón “Generar”_  
    4\. Loading / Procesando Feedback de proceso en curso: _Microcopy amigable · Robot pensando / Aprovechar la espera: branding + microcopy + UX writing._  
    5\. Vista previa de correo: _Mostrar mail generado y CTA Área de preview · Botón de envío_  
     
    
    ### UX Success Criteria 
    

*   _Generar un correo funcional en menos de 5 minutos._
*   _Usuario no técnico puede interactuar, sin ayuda externa._
*   _Comprensión clara del flujo, sin necesidad de tutoriales_.  
     
      # [Revisa el prototipo Aqui](https://www.figma.com/proto/hZBCALODSvaQfKjjuBhZMF/Prompty---NoCountry?node-id=4-105&p=f&t=EbCfN77wObEJCps0-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A104&starting-point-node-id=4%3A105)
    
    ---
    
    ### Proximos pasos - Release 
    
*   Marca blanca para que la PyME pueda personalizar la herramienta.
*   Responsive a PC y otros dispositivos, en caso de manejar una base de datos más grande.
*   IA con analisis predictivo que tenga en cuenta los prompt previos para sugerir nuevas comunicaciones: _Mail de Bienvenida, Seguimiento post-contacto / post-cotización, Ofertas y Promociones personalizadas, Recordatorio de renovación / vencimiento, Confirmación de cita / envío / acción realizada, encuestas de satisfaccion o detección de paintpoints, gestion de reclamos, etc._
    

    ---
    
      
    **Documentado por Nana López.**  
    [Mi Mail](mailto:diagis.visual@gmail.com)  
    [LinkedIn]( https://www.linkedin.com/in/diagisvisual/)  
    [Mi Portfolio]( https://diagisvisual.myportfolio.com/)
