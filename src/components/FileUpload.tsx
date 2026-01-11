'use client';

import { useState } from 'react';
import { storage } from '@/lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Upload, X, Check } from 'lucide-react';

interface FileUploadProps {
    onUploadComplete: (url: string) => void;
}

const FileUpload = ({ onUploadComplete }: FileUploadProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];

            // Limit size to 5MB for email attachments
            if (selectedFile.size > 5 * 1024 * 1024) {
                alert("Le fichier est trop volumineux (max 5Mo pour l'envoi par email)");
                return;
            }

            setFile(selectedFile);
            setStatus('processing');

            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target?.result as string;
                setStatus('success');
                onUploadComplete(base64);
            };
            reader.onerror = () => {
                setStatus('error');
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const clearFile = () => {
        setFile(null);
        setStatus('idle');
    };

    return (
        <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image ou Document (Max 5Mo)</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md dark:border-gray-700 dark:bg-gray-800 transition-all">
                {status === 'success' ? (
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2">
                            <Check className="h-8 w-8 text-green-500" />
                            <p className="text-sm text-green-600 font-medium">{file?.name} prêt !</p>
                        </div>
                        <button type="button" onClick={clearFile} className="mt-3 text-xs text-red-500 hover:underline">Supprimer</button>
                    </div>
                ) : (
                    <div className="space-y-1 text-center w-full">
                        {status === 'processing' ? (
                            <div className="flex flex-col items-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-2"></div>
                                <p className="text-sm text-muted-foreground">Préparation du fichier...</p>
                            </div>
                        ) : status === 'error' ? (
                            <div className="text-center">
                                <X className="mx-auto h-8 w-8 text-red-500" />
                                <p className="mt-1 text-sm text-red-600">Erreur de lecture</p>
                                <button type="button" onClick={clearFile} className="mt-2 text-xs text-primary hover:underline">Réessayer</button>
                            </div>
                        ) : (
                            <>
                                <Upload className="mx-auto h-10 w-10 text-gray-400" />
                                <div className="flex text-sm text-gray-600 justify-center">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer bg-white dark:bg-transparent rounded-md font-semibold text-primary hover:text-primary-dark focus-within:outline-none"
                                    >
                                        <span>Joindre une photo</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleChange} accept="image/*,.pdf" />
                                    </label>
                                    <p className="pl-1 text-muted-foreground">ou document</p>
                                </div>
                                <p className="text-xs text-gray-500">Apparaîtra en pièce jointe dans l'email</p>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUpload;
