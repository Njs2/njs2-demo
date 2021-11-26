class ExampleLocalizationAction extends baseAction {
  async executeMethod() {
    /*
    LOCALIZATION EXAMPLE

    Description:
    -This example explains how to define and use the localization or Language".
  
    Steps:
    1. You can use other languages along with English language for reponses.
    2. You may have noticed that in customResponseCode, by default every response codes have reponse message in English, as we defined 'en'.
    3. Even you can set response in other languages while you defining custom reponse code. Update below code in global/i18n/response.js,
          CUSTOM_RESPONSE: {
            responseCode: 1002, responseMessage: {
              "en": "Custom response",
              "es": "Respuesta personalizada",    //reponse in Spanish language
              "ar": "استجابة مخصصة"    //response in arabic
            }
          }
    4. To get response in Spanish, You have to pass a variable called 'lng_key' in header of the request as shown below,
          lng_key: es
        (NOTE: 'es' code for spanish code)
    5. Then you will get response as 'Respuesta personalizada' instead of 'Custom response'.
    6. You can add localization language for framework default responses, such as SUCCESS. You can find default responses in node_modules/@njs2/base/i18n/response.js
    */

    this.setResponse("CUSTOM_RESPONSE");
    return {};
  }
}
module.exports = ExampleLocalizationAction;
