/*
  Contact.jsx — Contact section with EmailJS form and personal links
*/

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle, FiPhone, FiMapPin,
} from 'react-icons/fi'
import { BsGithub, BsLinkedin, BsTwitterX, BsFacebook } from 'react-icons/bs'
import SectionTitle from './ui/SectionTitle'
import { useScrollAnimation, slideInLeftVariants, slideInRightVariants } from '../hooks/useScrollAnimation'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

const SOCIALS = [
  {
    icon: BsGithub,
    label: 'GitHub',
    handle: 'kibria-Rafi',
    href: 'https://github.com/kibria-Rafi',
    color: 'hover:text-white hover:border-white/40',
  },
  {
    icon: BsLinkedin,
    label: 'LinkedIn',
    handle: 'G M Kibria Rafi',
    href: 'https://www.linkedin.com/in/kibria-rafi/',
    color: 'hover:text-[#0A66C2] hover:border-blue-500/40',
  },
  {
    icon: BsTwitterX,
    label: 'X (Twitter)',
    handle: '@KibriaRafi3',
    href: 'https://x.com/KibriaRafi3',
    color: 'hover:text-white hover:border-white/40',
  },
  {
    icon: BsFacebook,
    label: 'Facebook',
    handle: 'kibriarafi6540',
    href: 'https://www.facebook.com/kibriarafi6540/',
    color: 'hover:text-[#1877F2] hover:border-blue-500/40',
  },
]

function Field({ label, name, type = 'text', value, onChange, error, icon: Icon, placeholder, required, rows }) {
  const isTextarea = type === 'textarea'
  const inputClass = `
    w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500
    transition-all duration-200 outline-none font-sans
    ${error
      ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
      : 'border-white/10 focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/20'}
  `

  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
        {label} {required && <span className="text-primary-400">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none z-10"
            style={isTextarea ? { top: '14px', transform: 'none' } : {}}
          />
        )}
        {isTextarea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={rows ?? 5}
            className={`${inputClass} resize-none ${Icon ? 'pl-10' : ''}`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`${inputClass} ${Icon ? 'pl-10' : ''}`}
          />
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
          <FiAlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const { ref: leftRef, controls: leftControls } = useScrollAnimation()
  const { ref: rightRef, controls: rightControls } = useScrollAnimation()

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.message.trim()) errs.message = 'Message cannot be empty'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <SectionTitle
          overline="Get In Touch"
          title="Contact "
          highlight="Me"
          subtitle="Have a project in mind, an opportunity, or a question? Reach out through any of the channels below."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            ref={leftRef}
            initial="hidden"
            animate={leftControls}
            variants={slideInLeftVariants}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: FiMail,
                label: 'Email',
                value: 'kibriarafi.bd.natore@gmail.com',
                href: 'mailto:kibriarafi.bd.natore@gmail.com',
                color: 'text-cyan-400',
              },
              {
                icon: FiPhone,
                label: 'Phone / WhatsApp',
                value: '+8801407638740',
                href: 'tel:+8801407638740',
                color: 'text-violet-400',
              },
              {
                icon: FiMapPin,
                label: 'Location',
                value: 'Bangladesh',
                href: '',
                color: 'text-emerald-400',
              },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/30 hover:bg-white/8 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className={color} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-slate-200 hover:text-white transition font-medium break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-200 font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-widest font-mono mb-3">Find Me On</p>
              <div className="grid grid-cols-2 gap-2">
                {SOCIALS.map(({ icon: Icon, label, handle, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 transition-all duration-200 ${color}`}
                  >
                    <Icon size={15} />
                    <div className="overflow-hidden">
                      <p className="text-[10px] text-slate-500">{label}</p>
                      <p className="text-xs font-medium truncate">{handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightControls}
            variants={slideInRightVariants}
            className="lg:col-span-3"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <FiCheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2 rounded-lg text-sm font-medium text-primary-300 border border-primary-500/40 hover:bg-primary-500/10 transition"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Your Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      icon={FiUser}
                      placeholder="G M Kibria Rafi"
                      required
                    />
                    <Field
                      label="Your Email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      icon={FiMail}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <Field
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration or job opportunity"
                  />

                  <Field
                    label="Message"
                    name="message"
                    type="textarea"
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    icon={FiMessageSquare}
                    placeholder="Tell me about your project or opportunity"
                    required
                    rows={5}
                  />

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      <FiAlertCircle size={14} />
                      Unable to send now. Please use phone, email, or social links.
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-violet-600 text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
