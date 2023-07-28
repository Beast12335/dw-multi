 /**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "pay",
  description: "shows the payment information",
  category: "MISC",
  command: {
    enabled: false,
  },
  slashCommand: {
    enabled: true,
    ephemeral: true,
    options: [{
      name : `order`,
      description:`Items ordered`,
      required:true},
              {
      name : `cost`,
      description:` Price of Item`,
      required:true},
              {
      name:`user`,
      description:`Choose the user`,
      required:true,
      choices:[{
        name:`Prithvi`,value:`Prithvi`},
               {name:`Icy`,value:`Icy`},
               {name:`Sanchit`,value:`Sanchit`},
               {name:`Tanki`,value:`Tanki`}]}],
  },

  /*async messageRun(message, args) {
    await message.safeReply(`🏓 Pong : \`${Math.floor(message.client.ws.ping)}ms\``);
  },*/

  async interactionRun(interaction) {
    let order = interaction.getStringOption('order')
    let cost = interaction.getStringOption('cost')
    let user = interaction.getStringOption('user')
    if (user == 'Prithvi'){
      var link = 'https://www.paypal.me/prithvirajghorpade'
      var p = '8806661777'}
    else if (user == 'Tanki'){
      var link = 'https://www.paypal.me/tanki667'
      var p = '9050661960@paytm'}
    else if (user == 'Icy'){
      var link = 'https://www.paypal.me/icyalfred'
      var p = '9050661960@paytm'
  }
    else {
      var link = 'https://www.paypal.me/Rinkiinterprices'
      var p = '9050661960@paytm'
  }
    await interaction.followUp(`As per our company policy, payment have to be done 1st before we can deliver the product\n\nItems ordered :${order}\n\nPrice:${cost}\n\nPls send the payment to :\n[Paypal](${link}) or Paytm : ${p}\n\nDrop us a screenshot after sending, thanks\n\nRegards,\nDesign Wonderland Management`
                               `);
  },
};
