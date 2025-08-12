'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  default_values_send_email,
  validation_send_email,
} from '@/validations/sendEmail';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const SendEmailForm = () => {
  const form = useForm<z.infer<typeof validation_send_email>>({
    resolver: zodResolver(validation_send_email),
    defaultValues: default_values_send_email,
  });

  const [loading, setLoading] = useState(false);
  async function sendEmail(data: z.infer<typeof validation_send_email>) {
    try {
      setLoading(true);
      const res = await axios.post('https://formspree.io/f/xzzvkgjb', {
        _subject: 'Novo lead landing page Webimob',
        message: data.mensagem,
      }); 
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(sendEmail)} className="mx-4">
      <fieldset disabled={loading} >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 my-4'>
        <FormField
          control={form.control}
          name='nomeCompleto'
          render={({ field }) => (
            <FormItem>
            <FormLabel>Nome Completo</FormLabel>
            <FormControl>
              <Input
                className='py-8'
                placeholder='Digite o Nome Completo'
                {...field}
              />
            </FormControl>
            <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                className='py-8'
                placeholder='Digite o E-mail'
                {...field}
              />
            </FormControl>
            <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='nomeImobiliaria'
          render={({ field }) => (
            <FormItem>
            <FormLabel>Nome da Imobiliaria</FormLabel>
            <FormControl>
              <Input
                className='py-8'
                placeholder='Digite o Nome da Imobiliaria'
                {...field}
              />
            </FormControl>
            <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='telefone'
          render={({ field }) => (
            <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
              <Input
                className='py-8'
                placeholder='Digite o Telefone'
                {...field}
              />
            </FormControl>
            <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <FormField
        control={form.control}
        name='mensagem'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mensagem</FormLabel>
            <FormControl>
            <Textarea
              className='pb-8'
              placeholder='Digite uma mensagem'
              {...field}
            />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        <Button className='p-8 text-xl mt-8' type='submit'>
        {loading ? 'ENVIANDO' : 'ENVIAR MENSAGEM'}
        </Button>
      </fieldset>
    </form>
    </Form>
  );
};
