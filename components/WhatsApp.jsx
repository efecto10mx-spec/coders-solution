"use client"
import React from 'react'
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const WhatsApp = () => {
    
    return (
        <div className='z-50'>
            <WhatsAppWidget
              phoneNumber="525580684520"
              replyTimeText="Responde lo antes posible"
              companyName="Coders Solution"
            />
        </div>
    );
  };

export default WhatsApp
