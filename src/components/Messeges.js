import { Card, CardContent, Typography } from '@mui/material'
import React, { forwardRef } from 'react';
import "./Messege.css"


const Messeges = forwardRef( ({user,mess}, ref) => {
    const isUser = user === mess.messege.username;
    return (
        <div ref={ref} className={`m-cd ${isUser && 'usr'}`} key={mess.id}>
            {!isUser && `${mess.messege.username || 'secret user'}`}
            <Card className={isUser ? "userCard" : "guestCard"}>
                <CardContent className="pd">
                    <Typography 
                        color={isUser ? "white" : "black"}
                        variant="h5"
                        component="h2"
                        fontSize="18px"
                    >
                         {mess.messege.messege}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Messeges
