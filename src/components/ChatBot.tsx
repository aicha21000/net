'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, limit } from 'firebase/firestore';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    createdAt: any;
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Bonjour ! Comment puis-je vous aider ?', sender: 'bot', createdAt: new Date() }
    ]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!inputText.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'user',
            createdAt: new Date(),
        };

        setMessages(prev => [...prev, newMessage]);
        setInputText('');

        // Simulate simple bot response logic (or real storage integration)
        try {
            // Optional: Save to Firestore
            // await addDoc(collection(db, 'chat_messages'), { ...newMessage, sessionId: 'session_123' });

            setTimeout(() => {
                const botResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    text: "Merci pour votre message. Un agent va vous répondre sous peu.",
                    sender: 'bot',
                    createdAt: new Date(),
                };
                setMessages(prev => [...prev, botResponse]);
            }, 1000);

        } catch (error) {
            console.error("Error sending message", error);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-hover transition-colors"
                >
                    <MessageSquare size={24} />
                </button>
            )}

            {isOpen && (
                <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col h-[500px] border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center dark:bg-blue-600">
                        <h3 className="font-semibold">Assistant OECLAT</h3>
                        <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg p-3 ${msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-br-none dark:bg-blue-600'
                                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200'
                                        }`}
                                >
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Écrivez votre message..."
                                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-primary text-white p-2 rounded-md hover:bg-primary-hover transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
