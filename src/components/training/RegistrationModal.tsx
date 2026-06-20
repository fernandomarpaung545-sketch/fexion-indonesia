'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Building, CheckCircle, Loader2 } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: string;
    title: string;
    price: number;
    date: string;
    type: 'training' | 'event';
  };
}

type Step = 'form' | 'payment' | 'success';

export default function RegistrationModal({ isOpen, onClose, item }: RegistrationModalProps) {
  const [step, setStep] = useState<Step>('form');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', notes: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setStep(item.price === 0 ? 'success' : 'payment');
  };

  const handlePayment = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setStep('success');
  };

  const handleClose = () => {
    setStep('form');
    setForm({ name: '', email: '', phone: '', company: '', notes: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-navy-900 border border-navy-700 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-navy-700/50">
              <div>
                <h2 className="text-white font-semibold text-lg">
                  {step === 'success' ? 'Registration Confirmed' : 'Register Now'}
                </h2>
                <p className="text-navy-400 text-sm mt-0.5 line-clamp-1">{item.title}</p>
              </div>
              <button onClick={handleClose} className="text-navy-400 hover:text-white transition-colors p-1">
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {step === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Full Name', icon: User, placeholder: 'Your full name' },
                      { name: 'company', label: 'Company', icon: Building, placeholder: 'Your company' },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="text-navy-300 text-sm mb-1.5 block">{f.label}</label>
                        <div className="relative">
                          <f.icon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
                          <input
                            name={f.name}
                            value={form[f.name as keyof typeof form]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            required
                            className="input-base pl-9 w-full text-sm"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  {[
                    { name: 'email', label: 'Email Address', icon: Mail, placeholder: 'your@email.com', type: 'email' },
                    { name: 'phone', label: 'Phone / WhatsApp', icon: Phone, placeholder: '+62 812 xxxx xxxx', type: 'tel' },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="text-navy-300 text-sm mb-1.5 block">{f.label}</label>
                      <div className="relative">
                        <f.icon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
                        <input
                          name={f.name}
                          type={f.type}
                          value={form[f.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={f.placeholder}
                          required
                          className="input-base pl-9 w-full text-sm"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50">
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-300">Registration Fee</span>
                      <span className="text-white font-semibold">
                        {item.price === 0 ? 'FREE' : `IDR ${item.price.toLocaleString('id-ID')}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-navy-300">Date</span>
                      <span className="text-navy-300">{item.date}</span>
                    </div>
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                    {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : null}
                    {loading ? 'Processing...' : item.price === 0 ? 'Confirm Free Registration' : 'Continue to Payment'}
                  </button>
                </form>
              )}

              {step === 'payment' && (
                <div className="space-y-4">
                  <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700/50 space-y-3">
                    <h3 className="text-white font-medium text-sm">Payment Details</h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-300">Bank Transfer</span>
                      <span className="text-white font-mono">BCA 123-456-7890</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-300">Account Name</span>
                      <span className="text-white">GOFEW Indonesia</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-300">Total</span>
                      <span className="text-gold-400 font-bold">IDR {item.price.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                  <p className="text-navy-400 text-xs">Upload your payment receipt after transfer. Registration will be confirmed within 1×24 hours.</p>
                  <button onClick={handlePayment} disabled={loading} className="btn-primary w-full justify-center">
                    {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : null}
                    {loading ? 'Confirming...' : 'I Have Paid — Upload Receipt'}
                  </button>
                </div>
              )}

              {step === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">You're Registered!</h3>
                  <p className="text-navy-300 text-sm mb-6">
                    Confirmation details have been sent to <strong className="text-white">{form.email}</strong>
                  </p>
                  <button onClick={handleClose} className="btn-primary px-8 justify-center">
                    Done
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
