const User = require('../model/model')
const instaMojo = require('instamojo-nodejs')
const url = require('url')

exports.getAllInfo = async (req,res,next) => {
    const userInfo = await User.create(req.body)
    console.log(userInfo)
    return res.status(201).json({
        sucess: true,
        data: userInfo
    })
}


exports.paymentControl = async (req,res,next) =>{
    instaMojo.setKeys('test_57e1a790dd02218daf261ad33b5','test_0ddcf922d89883c216d4de909ea')
    const data = new instaMojo.PaymentData();
   
    instaMojo.isSandboxMode(true)


    const userInfo = await User.find()
    const redirectUrl = `http://localhost:3009/payment-app/callback`

    data.amount = '100'
    data.purpose = 'product buy'
    data.buyer_name = 'shivang'
    data.email = 'shivangsingh2240@gmail.com'
    data.phone = '9519761312'
    data.redirect_url = redirectUrl
    data.send_email = false
    data.webhook = 'http://www.example.com/webhook/'
    data.send_sms= false;
	data.allow_repeated_payments =  false;

    instaMojo.createPayment(data,function(err,response){
        if(err){
            console.log(err)
        }else{
            
            const responseData = JSON.parse(response)
            
            res.status(200).json(responseData)
        }
    })
    


}



exports.sucessPage = (req,res,next) => {
    let url_parts = url.parse(req.url,true);
    res.send(url_parts)
}