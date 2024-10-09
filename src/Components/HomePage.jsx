// import { useState } from 'react'
// import Head from 'next/head'
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Slider } from "@/components/ui/slider"
// import { Switch } from "@/components/ui/switch"
// import { Label } from "@/components/ui/label"
// import { CheckCircle, BookOpen, Clock, Award, Star, FileText, Users, Zap, Mail, Phone, MapPin, Menu, GraduationCap, ArrowRight, Upload, Lightbulb, Coffee, Rocket, Target, Sparkles, Brain, Heart, Smile, ThumbsUp, Gift, Confetti, Party, Music, Fire, Laugh, Wink, Palette, Code, Globe, Headphones, Camera, Tv, Smartphone, Wifi, Cloud, Database, Lock, Shield, Fingerprint } from "lucide-react"

// export default function ConsistentDarkBlueAssignmentHelpLanding() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const subjects = [
//     "Mathematics", "Physics", "Chemistry", "Biology", "Computer Science",
//     "Literature", "History", "Economics", "Psychology", "Business",
//     "Engineering", "Art & Design", "Philosophy", "Sociology", "Political Science"
//   ]

//   const faqs = [
//     {
//       question: "How does your assignment help service work? 🤔",
//       answer: "It's as easy as pie! 🥧 Submit your details, get matched with an expert, and voila! Your assignment is done before you can say 'procrastination'! (Just kidding, we're fast, but not that fast! 😉)"
//     },
//     {
//       question: "Are your services confidential? 🤫",
//       answer: "We're like a vault 🔒 - your secrets (and assignments) are safe with us. We take privacy more seriously than a cat takes naps. 😺💤"
//     },
//     {
//       question: "What if I'm not satisfied with the work? 😕",
//       answer: "No worries! We'll revise it faster than you can say 'rewrite'! We're not happy unless you're happy. It's like a happiness guarantee, but for assignments! 😄👍"
//     },
//     {
//       question: "Do you guarantee on-time delivery? ⏰",
//       answer: "Does a bear... nevermind. YES! We're so punctual, we make atomic clocks look lazy. Your assignment will be there before the deadline, or we'll eat our keyboards! (Please don't make us eat our keyboards) 🖥😅"
//     },
//     {
//       question: "Can I choose my own expert? 🧑‍🏫",
//       answer: "It's like dating, but for academics. Swipe right on your favorite brainiac and let the sparks of knowledge fly! 💘🧠"
//     },
//     {
//       question: "Do you offer any discounts? 💰",
//       answer: "We love discounts more than students love free pizza! Check our promotions page, refer a friend, or just ask nicely. We might surprise you! 🍕🎉"
//     },
//   ]

//   const pricingPlans = [
//     {
//       name: "Basic Brainiac 🧠",
//       price: 19.99,
//       features: ["7-day delivery", "1 revision", "Plagiarism report", "24/7 support"],
//       description: "Perfect for the 'I can handle this... oh wait, maybe not' moments.",
//       icon: <Brain className="w-12 h-12 mb-4 text-blue-300" />
//     },
//     {
//       name: "Super Scholar 🦸‍♂",
//       price: 29.99,
//       features: ["5-day delivery", "2 revisions", "Plagiarism report", "24/7 support", "Direct writer contact"],
//       description: "For when you need to channel your inner Einstein, but he's not picking up the phone.",
//       icon: <Rocket className="w-12 h-12 mb-4 text-blue-300" />
//     },
//     {
//       name: "Mega Mind Melter 🧠💥",
//       price: 39.99,
//       features: ["3-day delivery", "Unlimited revisions", "Plagiarism report", "24/7 priority support", "Top expert assigned", "Detailed explanations"],
//       description: "When your brain needs a vacation, but your assignment doesn't.",
//       icon: <Zap className="w-12 h-12 mb-4 text-blue-300" />
//     },
//     {
//       name: "Time Lord Tier ⏳",
//       price: 59.99,
//       features: ["24-hour delivery", "Unlimited revisions", "Plagiarism report", "24/7 VIP support", "Top 5% expert", "Video explanation", "1-on-1 consultation"],
//       description: "For those 'I forgot it's due tomorrow' emergencies. We've all been there!",
//       icon: <Clock className="w-12 h-12 mb-4 text-blue-300" />
//     }
//   ]

//   const testimonials = [
//     { name: "Sarah J.", course: "Biology Major 🧬", text: "AssignmentPro turned my 'F'eelings of dread into 'A'mazing grades!" },
//     { name: "Mike T.", course: "Computer Science Wiz 💻", text: "These guys debug my assignments faster than I debug my code. And that's saying something!" },
//     { name: "Emily R.", course: "Literature Lover 📚", text: "They wrote my essay so well, even Shakespeare would be jealous. Okay, maybe not, but it was still great!" },
//     { name: "Alex K.", course: "Physics Phenom 🔬", text: "AssignmentPro helped me understand quantum mechanics. Now I can be in two places at once - in class and at the beach!" },
//     { name: "Olivia P.", course: "Art History Aficionado 🎨", text: "Their work is a masterpiece, much like the art I study. Michelangelo would approve!" },
//     { name: "Daniel L.", course: "Economics Enthusiast 📈", text: "The ROI on AssignmentPro is off the charts. My grades are bullish, and my stress levels are bearish!" },
//   ]

//   return (
//     <>
//       <Head>
//         <title>AssignmentPro - Expert Assignment Help for Students | Boost Your Grades</title>
//         <meta name="description" content="Get professional assignment help from experts. Improve your grades with our high-quality, plagiarism-free academic writing services. 24/7 support and on-time delivery guaranteed." />
//         <meta name="keywords" content="assignment help, academic writing, essay writing, homework help, online tutoring, expert writers" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://www.assignmentpro.com" />
//         <meta property="og:title" content="AssignmentPro - Expert Assignment Help for Students" />
//         <meta property="og:description" content="Boost your grades with professional assignment help. Quality work, on-time delivery, and 24/7 support." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.assignmentpro.com" />
//         <meta property="og:image" content="https://www.assignmentpro.com/og-image.jpg" />
//       </Head>
//       <div className="flex flex-col min-h-screen bg-blue-900 text-blue-100">
//         <header className="sticky top-0 z-50 w-full border-b border-blue-800 bg-blue-900/95 backdrop-blur supports-[backdrop-filter]:bg-blue-900/75">
//           <div className="container flex h-16 items-center">
//             <Link className="flex items-center justify-center" href="#">
//               <BookOpen className="h-6 w-6 mr-2 text-blue-300" />
//               <span className="font-bold text-xl">AssignmentPro</span>
//             </Link>
//             <nav className="ml-auto hidden md:flex gap-6">
//               {["Features 🌟", "Subjects 📚", "How It Works 🛠", "Pricing 💰", "Testimonials 🗣", "FAQ 🤔"].map((item) => (
//                 <Link key={item} className="text-sm font-medium text-blue-200 hover:text-blue-100 transition-colors" href={#${item.split(' ')[0].toLowerCase()}}>
//                   {item}
//                 </Link>
//               ))}
//             </nav>
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="ml-auto md:hidden text-blue-200">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Toggle menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="bg-blue-800">
//                 <nav className="flex flex-col gap-4">
//                   {["Features 🌟", "Subjects 📚", "How It Works 🛠", "Pricing 💰", "Testimonials 🗣", "FAQ 🤔"].map((item) => (
//                     <Link key={item} className="text-sm font-medium text-blue-200 hover:text-blue-100 transition-colors" href={#${item.split(' ')[0].toLowerCase()}}>
//                       {item}
//                     </Link>
//                   ))}
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </header>
//         <main className="flex-1">
//           <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
//             <div className="container px-4 md:px-6">
//               <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//                 <div className="flex flex-col justify-center space-y-4">
//                   <div className="space-y-2">
//                     <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 text-blue-100">
//                       Expert Assignment Help for
//                       <span className="text-blue-300"> Better Grades</span> 🚀
//                     </h1>
//                     <p className="max-w-[600px] text-blue-200 md:text-xl">
//                       Boost your academic performance with our professional assignment assistance. Quality work, on-time delivery, and 24/7 support. Let's turn those Fs into As! 📈
//                     </p>
//                   </div>
//                   <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                     <Button size="lg" className="bg-blue-600 text-blue-100 hover:bg-blue-700">
//                       Get Started
//                       <Rocket className="ml-2 h-5 w-5" />
//                     </Button>
//                     <Button size="lg" variant="outline" className="bg-blue-800/50 text-blue-100 border-blue-600 hover:bg-blue-800">
//                       View Samples
//                       <FileText className="ml-2 h-5 w-5" />
//                     </Button>
//                   </div>
//                   <div className="flex items-center space-x-4 text-sm mt-4 text-blue-200">
//                     <div className="flex items-center space-x-1">
//                       <CheckCircle className="text-blue-300 h-5 w-5" />
//                       <span>100% Original</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <Clock className="text-blue-300 h-5 w-5" />
//                       <span>On-time Delivery</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <GraduationCap className="text-blue-300 h-5 w-5" />
//                       <span>Expert Writers</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center">
//                   <Card className="w-full max-w-sm bg-blue-800/80 border-blue-700 backdrop-blur-sm">
//                     <CardHeader>
//                       <CardTitle className="text-2xl font-bold text-center text-blue-100">Get a Free Quote 💬</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <form className="space-y-4">
//                         <Input type="email" placeholder="Your Email 📧" className="bg-blue-700/50 border-blue-600 text-blue-100 placeholder:text-blue-300" />
//                         <Input type="tel" placeholder="Your Phone Number 📱" className="bg-blue-700/50 border-blue-600 text-blue-100 placeholder:text-blue-300" />
//                         <div className="border-2 border-dashed border-blue-600 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition-colors">
//                           <Upload className="mx-auto h-12 w-12 text-blue-300" />
//                           <p className="mt-2 text-sm text-blue-300">Drag and drop your assignment file here, or click to select a file 📁</p>
//                         </div>
//                         <Button type="submit" className="w-full bg-blue-600 text-blue-100 hover:bg-blue-700">
//                           Get Free Quote
//                           <Sparkles className="ml-2 h-5 w-5" />
//                         </Button>
//                       </form>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-blue-800">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">Why Choose AssignmentPro 🤔</h2>
//               <div className="grid gap-6  lg:grid-cols-3">
//                 {[
//                   { icon: Brain, title: "Expert Writers 🧠", description: "Our nerds are cooler than your average nerds. They eat complex equations for breakfast!" },
//                   { icon: Clock, title: "On-Time Delivery ⏰", description: "We're so punctual, even time itself is jealous. Your assignments arrive faster than pizza!" },
//                   { icon: Award, title: "Plagiarism-Free Guarantee 🏆", description: "Our work is more original than a hipster's mustache. 100% unique, just like you!" },
//                   { icon: Target, title: "All Academic Levels 🎯", description: "From 'I just learned to write' to 'I'm basically Einstein', we've got you covered!" },
//                   { icon: Users, title: "24/7 Customer Support 🦉", description: "Our support team never sleeps. They're probably vampires, but really friendly ones!" },
//                   { icon: Zap, title: "Fast Turnaround ⚡", description: "Need it done yesterday? Our time machine is in the shop, but we're still pretty fast!" },
//                 ].map((feature, index) => (
//                   <Card key={index} className="bg-blue-700/50 border-blue-600 hover:bg-blue-700/80 transition-colors">
//                     <CardHeader>
//                       <feature.icon className="w-10 h-10 mb-2 text-blue-300" />
//                       <CardTitle className="text-blue-100">{feature.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-blue-200">{feature.description}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//           <section id="subjects" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 to-blue-800">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">Subjects We Cover 📚</h2>
//               <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
//                 {subjects.map((subject, index) => (
//                   <Card key={index} className="text-center bg-blue-700/50 border-blue-600 hover:bg-blue-700/80 transition-colors">
//                     <CardHeader>
//                       <CardTitle className="text-blue-100">{subject} {index % 2 === 0 ? '🤓' : '📖'}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <Button variant="link" className="text-blue-300 hover:text-blue-200">
//                         Learn More
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//           <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-blue-800">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">How It Works 🛠</h2>
//               <div className="grid gap-6 lg:grid-cols-3">
//                 {[
//                   { number: 1, icon: FileText, title: "Submit Your Requirements 📝", description: "Tell us what you need. The more details, the better! It's like ordering a pizza, but for your brain." },
//                   { number: 2, icon: Brain, title: "Expert Assignment 🧠", description: "Our smarty-pants get to work. They're like academic superheroes, but with less spandex." },
//                   { number: 3, icon: Rocket, title: "Receive Your Assignment 🚀", description: "Get your top-notch work delivered. It's so good, you might want to frame it!" },
//                 ].map((step, index) => (
//                   <div key={index} className="flex flex-col items-center text-center">
//                     <div className="w-16 h-16 rounded-full bg-blue-600 text-blue-100 flex items-center justify-center text-2xl font-bold mb-4">
//                       <step.icon className="w-8 h-8" />
//                     </div>
//                     <h3 className="text-xl font-bold mb-2 text-blue-100">{step.title}</h3>
//                     <p className="text-blue-200">{step.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//           <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 to-blue-800">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">Pricing Plans 💰</h2>
//               <p className="text-xl text-center mb-8 text-blue-200">Choose your weapon against academic stress! 🛡</p>
//               <div className="grid gap-6 lg:grid-cols-4">
//                 {pricingPlans.map((plan, index) => (
//                   <Card key={index} className={flex flex-col ${index === 2 ? 'border-blue-500' : 'border-blue-700'} bg-blue-800/50}>
//                     <CardHeader>
//                       <div className="flex justify-center">{plan.icon}</div>
//                       <CardTitle className="text-2xl font-bold text-center text-blue-100">{plan.name}</CardTitle>
//                     </CardHeader>
//                     <CardContent className="flex-grow">
//                       <p className="text-4xl font-bold text-center mb-4 text-blue-100">${plan.price}<span className="text-xl font-normal">/page</span></p>
//                       <p className="text-sm text-center mb-4 text-blue-200">{plan.description}</p>
//                       <ul className="space-y-2 mb-4">
//                         {plan.features.map((feature, featureIndex) => (
//                           <li key={featureIndex} className="flex items-center">
//                             <CheckCircle className="w-5 h-5 mr-2 text-blue-300" />
//                             <span className="text-blue-200">{feature}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                     <CardFooter>
//                       <Button className="w-full bg-blue-600 hover:bg-blue-700 text-blue-100">
//                         Choose Plan
//                         {index === 2 ? <Fire className="ml-2 h-5 w-5" /> : <ArrowRight className="ml-2 h-5 w-5" />}
//                       </Button>
//                     </CardFooter>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//           <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-blue-800">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">What Our Happy Students Say 😊</h2>
//               <div className="grid gap-6 lg:grid-cols-3">
//                 {testimonials.map((testimonial, i) => (
//                   <Card key={i} className="bg-blue-700/50 border-blue-600">
//                     <CardContent className="pt-6">
//                       <div className="flex mb-4">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <Star key={star} className="w-5 h-5 fill-blue-300 text-blue-300" />
//                         ))}
//                       </div>
//                       <p className="mb-4 italic text-blue-100">"{testimonial.text}"</p>
//                       <p className="font-semibold text-blue-200">{testimonial.name}</p>
//                       <p className="text-sm text-blue-300">{testimonial.course}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//           <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 to-blue-800">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">Frequently Asked Questions 🤔</h2>
//               <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
//                 {faqs.map((faq, index) => (
//                   <AccordionItem key={index} value={item-${index}} className="border-b border-blue-700">
//                     <AccordionTrigger className="text-blue-100 hover:text-blue-300">
//                       <div className="flex items-center">
//                         <Lightbulb className="w-5 h-5 mr-2 text-blue-300" />
//                         {faq.question}
//                       </div>
//                     </AccordionTrigger>
//                     <AccordionContent className="text-blue-200">{faq.answer}</AccordionContent>
//                   </AccordionItem>
//                 ))}
//               </Accordion>
//             </div>
//           </section>
//           <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-blue-700">
//             <div className="container px-4 md:px-6 text-center">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-100 mb-6">Ready to Boost Your Grades? 🚀</h2>
//               <p className="text-xl text-blue-200 mb-8">Join thousands of happy students who've turned their academic frowns upside down!</p>
//               <Button size="lg" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
//                 Get Started Now
//                 <Rocket className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
//           </section>
//           <section id="fun-facts" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 to-blue-800">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">Fun Facts About AssignmentPro 🎉</h2>
//               <div className="grid gap-6 lg:grid-cols-3">
//                 {[
//                   { icon: Coffee, title: "Caffeine Powered", description: "Our writers collectively consume enough coffee to fill an Olympic-sized swimming pool each month. Talk about brain fuel! ☕" },
//                   { icon: Laugh, title: "Laughter is the Best Medicine", description: "We have a dedicated team of comedians to keep our writers entertained. Happy writers = Happy assignments! 😂" },
//                   { icon: Brain, title: "Big Brain Energy", description: "If we could harness the brainpower of our experts, we could probably power a small city. We're working on it! 🧠💡" },
//                 ].map((fact, index) => (
//                   <Card key={index} className="bg-blue-700/50 border-blue-600">
//                     <CardHeader>
//                       <fact.icon className="w-12 h-12 mb-4 text-blue-300 mx-auto" />
//                       <CardTitle className="text-center text-blue-100">{fact.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-blue-200 text-center">{fact.description}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//           <section id="meme-gallery" className="w-full py-12 md:py-24 lg:py-32 bg-blue-800">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">Meme Gallery: Because Learning Should Be Fun 😎</h2>
//               <div className="grid gap-6 lg:grid-cols-3">
//                 {[
//                   { src: "/placeholder.svg?height=200&width=300", alt: "Funny study meme 1" },
//                   { src: "/placeholder.svg?height=200&width=300", alt: "Funny study meme 2" },
//                   { src: "/placeholder.svg?height=200&width=300", alt: "Funny study meme 3" },
//                 ].map((meme, index) => (
//                   <Card key={index} className="bg-blue-700/50 border-blue-600">
//                     <CardContent className="p-4">
//                       <Image src={meme.src} alt={meme.alt} width={300} height={200} className="rounded-lg" />
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//           <section id="student-resources" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 to-blue-800">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">Free Student Resources 📚</h2>
//               <div className="grid gap-6 lg:grid-cols-3">
//                 {[
//                   { icon: FileText, title: "Study Guides", description: "Comprehensive guides to help you ace your exams. No sorcery required!" },
//                   { icon: Coffee, title: "Productivity Tips", description: "Learn how to study smarter, not harder. Coffee is still recommended though." },
//                   { icon: Lightbulb, title: "Inspiration Corner", description: "When motivation is low, we've got the quotes to get you going!" },
//                 ].map((resource, index) => (
//                   <Card key={index} className="bg-blue-700/50 border-blue-600">
//                     <CardHeader>
//                       <resource.icon className="w-12 h-12 mb-4 text-blue-300 mx-auto" />
//                       <CardTitle className="text-center text-blue-100">{resource.title}</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-blue-200 text-center">{resource.description}</p>
//                     </CardContent>
//                     <CardFooter className="justify-center">
//                       <Button variant="outline" className="bg-blue-600/50 text-blue-100 hover:bg-blue-600">Access Now</Button>
//                     </CardFooter>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//           <section id="referral-program" className="w-full py-12 md:py-24 lg:py-32 bg-blue-700">
//             <div className="container px-4 md:px-6 text-center">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-100 mb-6">Refer a Friend, Get Rewards! 🎁</h2>
//               <p className="text-xl text-blue-200 mb-8">Spread the love (and the good grades). Refer a friend and both of you get a discount!</p>
//               <Button size="lg" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
//                 Join Referral Program
//                 <Gift className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
//           </section>
//           <section id="success-stories" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 to-blue-800">
//             <div className="container px-4 md:px-6">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-100">Success Stories: From Stress to Success 🏆</h2>
//               <div className="grid gap-6 lg:grid-cols-2">
//                 {[
//                   { name: "Alex", story: "Went from 'Netflix and panic' to 'study and chill'. Now proudly rocks a 4.0 GPA!" },
//                   { name: "Jamie", story: "Used to think 'deadline' was a scary word. Now it's just a friendly reminder, thanks to AssignmentPro!" },
//                 ].map((story, index) => (
//                   <Card key={index} className="bg-blue-700/50 border-blue-600">
//                     <CardContent className="p-6">
//                       <p className="text-lg mb-4 text-blue-100">"{story.story}"</p>
//                       <p className="font-semibold text-blue-300">- {story.name}</p>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>
//           <section id="social-proof" className="w-full py-12 md:py-24 lg:py-32 bg-blue-800">
//             <div className="container px-4 md:px-6 text-center">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-blue-100">Join the Smart Crowd 🧠</h2>
//               <p className="text-2xl mb-8 text-blue-200">Over 100,000 students can't be wrong!</p>
//               <div className="flex justify-center space-x-4">
//                 <div className="flex items-center">
//                   <Star className="w-6 h-6 text-blue-300 mr-2" />
//                   <span className="text-2xl font-bold text-blue-100">4.9/5</span>
//                 </div>
//                 <div className="flex items-center">
//                   <ThumbsUp className="w-6 h-6 text-blue-300 mr-2" />
//                   <span className="text-2xl font-bold text-blue-100">98% Satisfaction</span>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//         <footer className="border-t border-blue-800 bg-blue-900">
//           <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
//             <div className="flex-1 space-y-4">
//               <Link className="flex items-center" href="#">
//                 <BookOpen className="h-6 w-6 mr-2 text-blue-300" />
//                 <span className="font-bold text-blue-100">AssignmentPro</span>
//               </Link>
//               <p className="text-sm text-blue-300">
//                 Turning coffee into assignments since 2010. ☕📚
//               </p>
//             </div>
//             <div className="flex-1 space-y-4">
//               <h3 className="font-bold text-blue-100">Quick Links 🚀</h3>
//               <nav className="flex flex-col space-y-2">
//                 {["Features", "Subjects", "How It Works", "Pricing", "FAQ"].map((item) => (
//                   <Link key={item} className="text-sm text-blue-300 hover:text-blue-100 flex items-center" href={#${item.toLowerCase().replace(' ', '-')}}>
//                     <ArrowRight className="w-4 h-4 mr-2" />
//                     {item}
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//             <div className="flex-1 space-y-4">
//               <h3 className="font-bold text-blue-100">Contact Us 📞</h3>
//               <nav className="flex flex-col space-y-2">
//                 <Link className="text-sm text-blue-300 hover:text-blue-100 flex items-center" href="mailto:support@assignmentpro.com">
//                   <Mail className="h-4 w-4 mr-2" />
//                   support@assignmentpro.com
//                 </Link>
//                 <Link className="text-sm text-blue-300 hover:text-blue-100 flex items-center" href="tel:+1234567890">
//                   <Phone className="h-4 w-4 mr-2" />
//                   +1 (234) 567-890
//                 </Link>
//                 <span className="text-sm text-blue-300 flex items-center">
//                   <MapPin className="h-4 w-4 mr-2" />
//                   123 Assignment St, Academic City, 12345
//                 </span>
//               </nav>
//             </div>
//           </div>
//           <div className="border-t border-blue-800">
//             <div className="container flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between">
//               <p className="text-xs text-blue-300">© 2024 AssignmentPro. All rights reserved. No assignments were harmed in the making of this website.</p>
//               <nav className="flex gap-4">
//                 <Link className="text-xs text-blue-300 hover:text-blue-100" href="#">
//                   Terms of Service
//                 </Link>
//                 <Link className="text-xs text-blue-300 hover:text-blue-100" href="#">
//                   Privacy Policy
//                 </Link>
//                 <Link className="text-xs text-blue-300 hover:text-blue-100" href="#">
//                   Cookie Policy (Chocolate Chip is our favorite)
//                 </Link>
//               </nav>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   )
// }