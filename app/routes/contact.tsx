import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { FiSend, FiMapPin, FiPhone, FiMail, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  company: z.string().min(1, { message: "Company name is required." }),
  countryCode: z.string(),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(1, { message: "Please select an option or topic." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms and Conditions and Privacy Policy.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const allCountries = getCountries().map((country) => ({
  country,
  code: `+${getCountryCallingCode(country)}`,
}));

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      countryCode: "+91",
      agreeTerms: false as any,
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Validated Form Submission:", data);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
      
      {/* Background Code Effects Layer (Reversed Blue Stripe Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(90deg, 
              rgba(255, 255, 255, 0.85) 0px, 
              rgba(255, 255, 255, 0.85) 30px, 
              rgba(147, 197, 253, 0.35) 31px, 
              rgba(59, 130, 246, 0.65) 60px
            )`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-blue-200/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 space-y-16">
        
        {/* Main Split Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-3xl rounded-3xl border border-[#9eddf7]/50 shadow-[0_30px_70px_rgba(65,160,200,0.12)] grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
        >
          
          {/* Left Side: Contact Info & Social Links */}
          <div className="lg:col-span-5 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-between space-y-10 bg-[#f1f2f2]/60">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9eddf7]/30 border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-semibold uppercase tracking-wider shadow-sm">
                <HiSparkles className="w-3.5 h-3.5 text-[#f7c037]" /> Reach Out
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062039]">
                Get in touch
              </h2>
              <p className="text-[#353535] text-sm leading-relaxed">
                Connect with our team to explore how SLaiCE and a-eDMS can streamline your enterprise workflows.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6 pt-4">
                
                {/* Head Office */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#41a0c8] text-white shrink-0 shadow-md">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#979797]">Head Office</h4>
                    <p className="text-sm font-semibold text-[#062039] mt-0.5">
                      Anna Nagar, Chennai, India<br />
                      Tamil Nadu - 600040
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#41a0c8] text-white shrink-0 shadow-md">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#979797]">Email Us</h4>
                    <p className="text-sm font-semibold text-[#062039] mt-0.5">
                      sales@auggit.com<br />
                      support@auggit.com
                    </p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#41a0c8] text-white shrink-0 shadow-md">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#979797]">Call Us</h4>
                    <p className="text-sm font-semibold text-[#062039] mt-0.5">
                      Phone : +91 9600134009<br />
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Follow Social Media */}
            <div className="space-y-3 pt-4 border-t border-[#e3e3e3]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#979797]">Follow our social media</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="p-3 rounded-2xl bg-[#41a0c8] text-white hover:bg-[#1267a7] transition-all shadow-md">
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a href="#" className="p-3 rounded-2xl bg-[#41a0c8] text-white hover:bg-[#1267a7] transition-all shadow-md">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-3 rounded-2xl bg-[#41a0c8] text-white hover:bg-[#1267a7] transition-all shadow-md">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-3 rounded-2xl bg-[#41a0c8] text-white hover:bg-[#1267a7] transition-all shadow-md">
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            {!submitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                
                <div>
                  <h3 className="text-2xl font-bold text-[#062039]">Send us a message</h3>
                  <p className="text-xs text-[#979797] mt-1">Fill out the fields below and our enterprise support team will respond promptly.</p>
                </div>

                {/* Name & Company Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Name</label>
                    <input 
                      type="text" 
                      placeholder="Name"
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-[#e3e3e3] focus:bg-white focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 text-sm outline-none transition-all"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 flex items-center gap-1 mt-1 font-medium">
                        <FiAlertCircle /> {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Company</label>
                    <input 
                      type="text" 
                      placeholder="Company"
                      {...register("company")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-[#e3e3e3] focus:bg-white focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 text-sm outline-none transition-all"
                    />
                    {errors.company && (
                      <p className="text-[11px] text-rose-500 flex items-center gap-1 mt-1 font-medium">
                        <FiAlertCircle /> {errors.company.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Phone</label>
                    <div className="flex gap-2">
                      <select
                        {...register("countryCode")}
                        className="px-2.5 py-3 rounded-xl bg-slate-50 border border-[#e3e3e3] text-xs font-semibold text-[#062039] outline-none focus:border-[#41a0c8]"
                      >
                        {allCountries.map((c) => (
                          <option key={`${c.country}-${c.code}`} value={c.code}>
                            {c.country} ({c.code})
                          </option>
                        ))}
                      </select>
                      <input 
                        type="tel" 
                        placeholder="Phone"
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-[#e3e3e3] focus:bg-white focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 text-sm outline-none transition-all"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-rose-500 flex items-center gap-1 mt-1 font-medium">
                        <FiAlertCircle /> {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Email</label>
                    <input 
                      type="email" 
                      placeholder="Email"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-[#e3e3e3] focus:bg-white focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 text-sm outline-none transition-all"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 flex items-center gap-1 mt-1 font-medium">
                        <FiAlertCircle /> {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Subject / Product Option</label>
                  <select 
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-[#e3e3e3] focus:bg-white focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 text-sm text-slate-700 outline-none transition-all"
                  >
                    <option value="">—Please choose an option—</option>
                    <option value="slaice">SLaiCE SAP Data Slicing</option>
                    <option value="edms">a-eDMS Platform</option>
                    <option value="consultation">Compliance Consultation</option>
                    <option value="support">Technical Support</option>
                  </select>
                  {errors.subject && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 mt-1 font-medium">
                      <FiAlertCircle /> {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Message</label>
                  <textarea 
                    rows={3}
                    placeholder="Message"
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-[#e3e3e3] focus:bg-white focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 text-sm outline-none transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 mt-1 font-medium">
                      <FiAlertCircle /> {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="space-y-1 pt-1">
                  <div className="flex items-start gap-2.5">
                    <input 
                      type="checkbox"
                      id="agreeTerms"
                      {...register("agreeTerms")}
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-[#41a0c8] focus:ring-[#41a0c8] cursor-pointer"
                    />
                    <label htmlFor="agreeTerms" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                      I agree to the <a href="#" className="text-[#41a0c8] font-semibold hover:underline">Terms and Conditions</a> and <a href="#" className="text-[#41a0c8] font-semibold hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  {errors.agreeTerms && (
                    <p className="text-[11px] text-rose-500 flex items-center gap-1 pl-6 font-medium">
                      <FiAlertCircle /> {errors.agreeTerms.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(65,160,200,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Sending..." : "Submit"}</span>
                  <FiSend className="w-4 h-4" />
                </button>

              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-20 h-20 bg-emerald-100 text-[#5e8b22] rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <FiCheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#062039]">Message Sent Successfully!</h3>
                  <p className="text-[#353535] text-sm max-w-sm mx-auto">
                    Thank you for reaching out. Our support team will review your requirements and get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    reset();
                    setSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </div>

        </motion.div>

        {/* GOOGLE MAP SECTION ADDED AT THE BOTTOM */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/95 backdrop-blur-3xl rounded-3xl p-4 sm:p-6 border border-[#9eddf7]/50 shadow-[0_20px_50px_rgba(65,160,200,0.1)] space-y-4"
        >
          <div className="flex items-center justify-between px-2">
            <div>
              <h3 className="text-lg font-bold text-[#062039]">Our Headquarters Location</h3>
              <p className="text-xs text-[#979797]">Visit our office or schedule a corporate meeting in Anna Nagar, Chennai.</p>
            </div>
            <a 
              href="https://maps.google.com/?q=Anna+Nagar,+Chennai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#41a0c8] hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              title="Auggit Head Office Map - Anna Nagar Chennai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.353787728639!2d80.2074!3d13.0878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264307a0c7c05%3A0x629c118e69e2c65!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}