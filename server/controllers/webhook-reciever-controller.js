'use strict';

function  checkIfExistAndRun(strapi, serviceName, method, entity){
  console.log ("Calling Service '"+ serviceName + "' from webhook reciever");
  let serviceObject = strapi.service(serviceName);
  console.log ("Checking service Object");
  if (serviceObject && serviceObject[method] && serviceObject[method] instanceof Function){
    console.log ("Ready to execute the method "+method+" from service "+ serviceName);
    console.log (entity);
    return serviceObject[method](entity);
  }
  return undefined;
}

module.exports = ({ strapi }) => ({
  
  index(ctx) {
    if ( ctx.request.header  && ctx.request.header.strapiname ){
        
        if (ctx.request.body.event  && ctx.request.body.event.includes("entry.")){

            let microservice = ctx.request.header.strapiname;
            let modelType = ctx.request.body.model;
            let event = ctx.request.body.event;
            event = event.replace('entry.', '');
            let call =  "plugin::"+microservice + "." + modelType;
            
            let response = checkIfExistAndRun(strapi, call, event, ctx.request.body.entry);

            if (response){
              ctx.send( {response:"success",data:response} );
            }else{
                console.warn ("There are no internal services for call '"+event+"(...)' in service "+call);
                ctx.send( {response:"nothing to do!"} );
            }

          } else {
            //FIXME: Add case of media in case that we need it
            console.error("There is an event of NO-ENTRY that cannot be processed.");
            console.error(ctx.request);
            console.error(ctx.request.body);
            ctx.badRequest("There is an event of NO-ENTRY that cannot be processed.");
          }


    } else {
      console.error("We got a call to webhook-reciver without microservice header.");
      console.error(ctx.request);
      console.error(ctx.request.body);
      ctx.badRequest("We got a call to webhook-reciver without microservice header.") ;
    }
  }
});
