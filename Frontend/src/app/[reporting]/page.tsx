'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardFooter,
} from "@/components/ui/card";
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from '@/components/ui/switch';
import { Label } from '@radix-ui/react-dropdown-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// Zod validation schema
const reportschema = z.object({
    fname: z.string().nonempty('First name is required'),
    lname: z.string().nonempty('Last name is required'),
    phoneno: z.string().nonempty('Phone number is required'),
    location: z.string().nonempty('Location is required'),
    message: z.string().nonempty('Message is required'),
    image: z.any().refine((file: any) => file instanceof File, {
        message: 'Please upload an image',
    }).optional(),
});

export default function Report() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isEmergency, setIsEmergency] = useState(false); // State to track switch

    // React Hook Form with Zod validation
    const form = useForm({
        resolver: zodResolver(reportschema),
        defaultValues: {
            fname: '',
            lname: '',
            phoneno: '',
            location: '',
            message: '',
            image: undefined,
        },
    });

    const onSubmit = async (data: { fname: string; lname: string; phoneno: string; location: string; message: string; image: File | undefined }) => {
        const formData = new FormData();
        formData.append('fname', data.fname);
        formData.append('lname', data.lname);
        formData.append('phoneno', data.phoneno);
        formData.append('location', data.location);
        formData.append('message', data.message);
        if (data.image) {
            formData.append('image', data.image);
        }

        try {
            await axios.post('/api/report', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    // Handle file input changes
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    return (
        <>
            <div className="flex justify-center w-full">
                <div className={`flex flex-col h-[60%] w-[80%] px-28 pt-24 space-y-24`}>
                    {/* Change background color based on emergency switch */}
                    <Card style={{ backgroundColor: isEmergency ? '#ff4d4d' : '#777E8B' }}>
                        <div className=" flex w-full">
                            <div className='flex w-[60%] space-y-4'>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    {/* Personal Information Fields */}
                                    <fieldset className="pt-16 w-[60%] px-24">
                                        <div className="flex justify-between mb-4">
                                            {/* First Name */}
                                            <div className="flex flex-col w-1/2 pr-2">
                                                <label htmlFor="fname">First Name</label>
                                                <Input {...form.register('fname')} />
                                                {form.formState.errors.fname && (
                                                    <p className="text-red-500">
                                                        {form.formState.errors.fname.message}
                                                    </p>
                                                )}
                                            </div>
                                            {/* Last Name */}
                                            <div className="flex flex-col w-1/2 pl-2">
                                                <label htmlFor="lname">Last Name</label>
                                                <Input {...form.register('lname')} />
                                                {form.formState.errors.lname && (
                                                    <p className="text-red-500">
                                                        {form.formState.errors.lname.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* Contact Information Fields */}
                                    <fieldset className="w-[60%] px-24">
                                        <legend className="text-lg font-semibold mb-4">Contact Information</legend>

                                        {/* Phone Number */}
                                        <div className="mb-4 w-[60%]">
                                            <label htmlFor="phoneno">Phone Number</label>
                                            <Input {...form.register('phoneno')} />
                                            {form.formState.errors.phoneno && (
                                                <p className="text-red-500">
                                                    {form.formState.errors.phoneno.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Location */}
                                        <div className="mb-4 w-[60%]">
                                            <label htmlFor="location">Location</label>
                                            <Input {...form.register('location')} />
                                            {form.formState.errors.location && (
                                                <p className="text-red-500">
                                                    {form.formState.errors.location.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div className="mb-4 w-[60%]">
                                            <label htmlFor="message">Message</label>
                                            <Textarea {...form.register('message')} />
                                            {form.formState.errors.message && (
                                                <p className="text-red-500">
                                                    {form.formState.errors.message.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Custom Image Input */}
                                        <div className="mb-4 w-[60%]">
                                            <label htmlFor="image">Image</label>
                                            <div className="flex items-center space-x-4">
                                                <input
                                                    type="file"
                                                    id="image"
                                                    {...form.register('image')}
                                                    accept="image/*"
                                                    style={{ display: 'none' }} // Hide the default file input
                                                    onChange={(e) => handleFileChange(e)}
                                                />
                                                <Button
                                                    className='w-24 mt-2'
                                                    type="button" variant="outline"
                                                    onClick={() => document.getElementById('image')?.click()}
                                                >
                                                    Browse
                                                </Button>
                                                {selectedFile && <span>{selectedFile.name}</span>}
                                            </div>
                                            {form.formState.errors.image && (
                                                <p className="text-red-500">
                                                    {form.formState.errors.image.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <CardFooter>
                                            <Button
                                                type='submit'
                                                className='ml-24 mt-9 px-80 py-5 text-xl w-[60%] bg-black border-spacing-8 rounded-[10px]'
                                            >
                                                Assign a report
                                            </Button>
                                        </CardFooter>
                                    </fieldset>
                                </form>
                            </div>

                            {/* Emergency switch and Contact Us stacked vertically */}
                            <div className='flex w-[40%] justify-center'>
                                <div className='flex flex-col items-center'>
                                    {/* Emergency Switch */}
                                    <div className='flex items-center mt-5'>
                                        <Switch id="Emergency" checked={isEmergency} onCheckedChange={setIsEmergency} />
                                        <label htmlFor="Emergency" className='text-xl font-serif ml-4'>Emergency</label>
                                    </div>

                                    {/* Contact Us Section (below switch) */}
                                    <div className="flex flex-col items-center mt-24">
                                        <h2 className="text-2xl font-bold">Contact Us</h2>
                                        <p className="mt-2 text-lg">For any inquiries or assistance:</p>

                                        {/* Email with Font Awesome icon */}
                                        <div className="flex items-center mt-4 text-lg font-medium">
                                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-6 w-6" />
                                            Email: support@suraksha.com
                                        </div>

                                        {/* Phone with Font Awesome icon */}
                                        <div className="flex items-center mt-2 text-lg font-medium">
                                            <FontAwesomeIcon icon={faPhone} className="mr-2 h-6 w-6" />
                                            Phone: +977 9898989898
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
