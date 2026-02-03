"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, QrCode, Clipboard, ArrowLeft, ArrowRight } from "lucide-react";

const STEPS = ["Details", "Payment", "Verification"];

export default function FeastPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    buyerEmail: "",
    rollNumber: "",
    amount: "160",
    utr: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
    } else {
      // Final submission logic
      alert("Submission successful! Your data has been recorded. You will receive your coupon shortly.");
      console.log("Submitted Data:", formData);
      // In a real scenario, this would POST to a Google Form action or an API
    }
  };

  return (
    <div className="min-h-screen bg-ugadi-yellow/5 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-maroon font-serif mb-2">Ugadi Feast 2026</h1>
          <p className="text-foreground/60">Reserve your spot for the traditional Telugu Bhojanam</p>
        </div>

        {/* Stepper */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          {STEPS.map((name, i) => (
            <div key={name} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                  step > i + 1 ? "bg-ugadi-green text-white" : step === i + 1 ? "bg-saffron text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                {step > i + 1 ? <CheckCircle size={20} /> : i + 1}
              </div>
              <span className={`text-xs mt-2 font-medium ${step === i + 1 ? "text-saffron" : "text-gray-500"}`}>{name}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-ugadi-yellow/20">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold mb-6 text-foreground">Registration Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-1">Roll Number</label>
                    <input
                      required
                      type="text"
                      name="rollNumber"
                      value={formData.rollNumber}
                      onChange={handleChange}
                      placeholder="e.g. 21MS001"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">Personal Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">Buyer Email Address (if different)</label>
                  <input
                    required
                    type="email"
                    name="buyerEmail"
                    value={formData.buyerEmail}
                    onChange={handleChange}
                    placeholder="buyer@example.com"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">Coupon Type</label>
                  <select
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none bg-white"
                  >
                    <option value="160">Student Coupon - ₹160</option>
                    <option value="500">Family Coupon - ₹500</option>
                    <option value="1000">Supportive Patron - ₹1000</option>
                  </select>
                </div>
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-saffron hover:bg-saffron/90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    Proceed to Payment <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold mb-4">Complete Payment</h2>
                <p className="text-gray-600 mb-8">Please pay ₹{formData.amount} using any UPI app</p>

                <div className="bg-gray-50 p-6 rounded-2xl inline-block mb-8 border-2 border-dashed border-gray-200">
                  <div className="w-48 h-48 bg-white mx-auto flex items-center justify-center shadow-sm rounded-lg mb-4">
                    <QrCode size={160} className="text-foreground" />
                  </div>
                  <p className="font-mono text-sm font-bold text-maroon">sample-upi-id@okicici</p>
                  <button
                    type="button"
                    onClick={() => navigator.clipboard.writeText("sample-upi-id@okicici")}
                    className="mt-2 text-xs text-saffron flex items-center justify-center gap-1 mx-auto hover:underline"
                  >
                    <Clipboard size={12} /> Copy UPI ID
                  </button>
                </div>

                <div className="space-y-4">
                  <a
                    href={`upi://pay?pa=sample-upi-id@okicici&pn=Ugadi2026&am=${formData.amount}&cu=INR`}
                    className="block w-full bg-ugadi-green hover:bg-ugadi-green/90 text-white font-bold py-3 rounded-xl transition-all"
                  >
                    Pay via UPI App
                  </a>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 border-2 border-gray-200 hover:bg-gray-50 text-gray-600 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <ArrowLeft size={20} /> Back
                    </button>
                    <button
                      type="submit"
                      className="flex-[2] bg-saffron hover:bg-saffron/90 text-white font-bold py-3 rounded-xl transition-all"
                    >
                      I have paid
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-2">Payment Verification</h2>
                  <p className="text-gray-600">Enter your transaction details for confirmation</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">UTR / Transaction ID / Unique Code</label>
                  <input
                    required
                    type="text"
                    name="utr"
                    value={formData.utr}
                    onChange={handleChange}
                    placeholder="e.g. 544908718588"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-2">Check your UPI app's transaction history for the 12-digit UTR number.</p>
                </div>

                <div className="bg-ugadi-green/5 p-4 rounded-lg border border-ugadi-green/20">
                  <p className="text-sm text-ugadi-green font-medium">
                    Once submitted, our team will verify the payment and your digital coupon will be sent to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 border-2 border-gray-200 hover:bg-gray-50 text-gray-600 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft size={20} /> Back
                  </button>
                  <button
                    type="submit"
                    className="flex-[2] bg-ugadi-green hover:bg-ugadi-green/90 text-white font-bold py-3 rounded-xl transition-all"
                  >
                    Submit Details
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <p className="mt-8 text-center text-sm text-foreground/40">
          In case of any payment issues, please contact the Ugadi Committee at <a href="mailto:ugadi@example.com" className="underline">ugadi@example.com</a>
        </p>
      </div>
    </div>
  );
}
