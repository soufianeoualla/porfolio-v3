"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import Image from "next/image";
import call from "../assets/call.svg";
import calendar from "../assets/calendar.svg";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useTransition } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email is required.",
  }),
  message: z.string().min(10, {
    message: "Messsage must be at least 10 characters.",
  }),
});

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = () => {
    startTransition(async () => {
      try {
        await emailjs
          .sendForm(
            "service_jsumuec",
            "template_2lkxz3y",
            "#form",
            "2oeWgya5j2EmOAAtY"
          )
          .then(() => {
            toast.success("Your email is successfully sent");
          })
          .catch(() => {
            toast.error("Error sending email");
          });
      } catch (error) {
        console.log(error);
      }
    });
    form.reset();
  };

  return (
    <div className=" max-w-[1180px] mx-auto py-16">
      <h1 className="text-white text-4xl font-bold ">
        Need help? Get in touch
      </h1>
      <div className="grid grid-cols-[1fr,380px] gap-8 mt-8 sm:grid-cols-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(sendEmail)}
            id="form"
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="Enter your full name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="email"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={isPending}
                      placeholder="Write your message"
                      className="h-[108px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              type="submit"
              disabled={isPending}
              className="px-8 py-4 text-white font-semibold text-lg rounded-md bg-indigo-600 hover:bg-indigo-600/70 disabled:bg-opacity-70 disabled:cursor-not-allowed"
            >
              Send Message
            </button>
          </form>
        </Form>

        <div className="space-y-7">
          <div className="px-6 py-4 bg-neutral-800 rounded-xl">
            <Image src={call} alt="call" width={69} height={69} />
            <h3 className="text-2xl text-white mb-2 mt-4 sm:text-xl">
              +212 6 31 84 98 16{" "}
            </h3>
            <p>Call us directly if you need any urgent help.</p>
          </div>

          <div className="px-6 py-4 bg-neutral-800 rounded-xl">
            <div className="w-[69px] h-[63px] rounded-xl flex justify-center items-center">
              <Image src={calendar} alt="call" width={69} height={69} />
            </div>
            <h3 className="text-2xl text-white mb-2 mt-4  sm:text-xl">
              soufianeoualla0@gmail.com
            </h3>
            <p>Email us directly if you need any help.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
