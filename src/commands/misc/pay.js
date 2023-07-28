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
    else if (use == 'Tanki'){
  var link = 'https://www.paypal.me/tanki667'
  var p = '9534269526@paytm'}
else if (a[2].value == 'Icy'){
  var link = 'https://www.paypal.me/icyalfred'
  var p = '9534269526@paytm'
  }
else {
  var link = 'https://www.paypal.me/Rinkiinterprices'
  var p = '9534269526@paytm'
  }
    await interaction.followUp(``);
  },
};
