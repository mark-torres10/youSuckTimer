import React, { useState, useEffect } from 'react'

import '../styles/Quote.css'

const quotes = [
    "Volume negates luck.",
    "If you do something for 5 years, do you think you'll still suck?",
    "What makes great things hard to do isn't complexity, it's consistency.",
    "Can you imagine putting 1,000 hours into something and still sucking?",
    "It's hard to suck at something if you've put 1,000 hours into it.",
    "If you're still starting something, of course you suck. You have to suck."
]

export default function Quote() {
    const [quote, setQuote] = useState(quotes[0])
    
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, [])
    
    return (
        <div className="Quote">
            <p>{quote}</p>
        </div>
    )
}
