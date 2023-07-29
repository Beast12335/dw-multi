module.exports = {
  name: "bill",
  description: "creates bill for user",
  category: "MISC",
  command: {
    enabled: false,
  },
  slashCommand: {
    enabled: true,
    ephemeral: false,
    options: [{
      name:`user`, 
      description:`choose the customer`,
      required:true,
      type:User},
      {
      name : `order`,
      description:`Items ordered`,
      required:true},
              {
      name : `cost`,
      description:` Price of Item`,
      required:true},
              {
      name:`currency`,
      description:`Choose the currency`,
      required:true,
      choices:[{
        name:`dollar`,value:`dollar`},
               {name:`euro`,value:`euro`},
               {name:`inr`,value:`inr`},
               {name:`myr`,value:`myr`}]},
              {name:`discount`,
               description:`enter the discount`,
               required:true},
              {name:`price`,
               required:true,
               description:`final price after discount`}],
  },
const {registerFont, createCanvas, loadImage} = require('canvas');
const comicsans = require('@canvas-fonts/tahoma');
registerFont(comicsans, {family: 'Tahoma'});
await interaction.deferReply()
const canvas = createCanvas(402, 752);
const ctx = canvas.getContext('2d');
ctx.fillStyle =
  'https://media.discordapp.net/attachments/916149747180511294/983757661348704276/DW_receipt.png';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let bill = `https://media.discordapp.net/attachments/916149747180511294/983757661348704276/DW_receipt.png`;
let image = await loadImage(bill);
ctx.drawImage(image, 2, 2, 400, 750);
let a = interaction.options.getUser('customer')
let av = await client.users.fetch(a)
let t = interaction.options.getString('order')
let cost = interaction.options.getString('cost')
let cr = interaction.options.getString('currency')
let discount = interaction.options.getString('discount')
let final = interaction.options.getString('price')
ctx.font = 'bold 30px "Comic Sans"';
ctx.fillStyle = '#FFFFFF';
ctx.textAlign = 'center';
var beast;
if (!(av.nick == null)) {
  beast = av.nick}
else{
  beast = av.user.username}
if (beast.length<6) {
  ctx.fillText(beast,280,148) }
else if(beast.length>6 & beast.length<15) {
  ctx.fillText(beast, 255,190);}
else {ctx.fillText(beast,185,190)}
if (t.length>10 & t.length < 15) {
  ctx.fillText(`${t}`, 275, 320);}
else if(t.length<10) {
  ctx.fillText(t, 252,269) }
else { ctx.fillText(t,240,320) }
if (cr == 'dollar') {
  var curr = ''
  var currency = '$'}
else if (cr == 'euro') {
  var curr = ''
  var currency = '€'}
else if (cr == 'inr') {
  var currency = ''
  var curr = '₹'}
else if (cr == 'myr'){
  var curr = ''
  var currency = 'RM '}

ctx.fillText(`${currency}${cost}${curr}`, 232, 395);
ctx.fillText(`${discount}`, 262, 518);
ctx.fillText(`${currency}${final}${curr}`, 225, 641);

const attach = new AttachmentBuilder(canvas.toBuffer(),{name:`bill.png`})
await interaction.followUp({content:` `, attachment:[attach]});
