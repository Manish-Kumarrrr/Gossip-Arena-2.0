
export const addMessage = async(req,res,next)=>{
    try{
        const prisma = getPrismaInstance();
        const {message, from, to} = req.body;
        const getUser = onlineUsers.get(to);
        if(message && from && to){
            const newMessage = await prisma.message.create({
                data:{
                    message,sender:{connect:{ id: parseInt(from)}},
                    reciever: { connect: { id: parseInt(to)}},
                    messageStatus:getUser? "delivered":"sent",
                },
                include:{sender:true,reciever:true},
            });
            return res.status(201).send({message:newMessage});
        }
        return res.status(400).send("From, to and Message is required.");
    }catch(err){
        next(err)
    }

}