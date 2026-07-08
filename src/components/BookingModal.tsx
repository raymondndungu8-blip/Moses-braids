import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, CalendarCheck, Scissors } from 'lucide-react';
import { BookingState, Language } from '../types';
import { DICTIONARY } from '../data/content';

interface BookingModalProps {
  booking: BookingState;
  lang: Language;
  onClose: () => void;
  onSuccess: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  booking,
  lang,
  onClose,
  onSuccess
}) => {
  const t = DICTIONARY[lang].modal;
  const [formData, setFormData] = useState({
    name: booking.clientName,
    email: booking.clientEmail,
    phone: booking.clientPhone,
    notes: booking.notes
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const totalEstimate = (booking.selectedService?.priceStart || 0) + booking.lengthAddonPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 3500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative max-w-lg w-full bg-[#faf5ee] rounded-3xl overflow-hidden shadow-2xl border border-[#ece6dc]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-[#f2ece4] hover:bg-[#ece6dc] text-[#3a302a] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="p-10 text-center space-y-6 my-6">
            <div className="w-16 h-16 rounded-full bg-[#c2652a] text-white flex items-center justify-center mx-auto shadow-xl animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-normal text-[#3a302a]">
              {t.successTitle}
            </h3>
            <p className="text-sm text-[#605850] leading-relaxed font-light">
              {t.successMsg
                .replace('{date}', booking.selectedDate)
                .replace('{time}', booking.selectedTime)}
            </p>
            <div className="p-4 rounded-2xl bg-[#f2ece4] text-xs font-mono text-[#3a302a]">
              Haratzmüllerstr. 19, 4400 Steyr
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6">
            
            <div className="border-b border-[#ece6dc] pb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c2652a] block mb-1">
                MOSES STEYR
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#3a302a]">
                {t.title}
              </h3>
              <p className="text-xs text-[#78706a] mt-1 font-light">
                {t.subtitle}
              </p>
            </div>

            {/* Selected Service Snippet Box */}
            <div className="bg-[#f2ece4] rounded-2xl p-5 border border-[#ece6dc] space-y-2">
              <div className="flex items-center justify-between font-serif text-lg font-semibold text-[#3a302a]">
                <span>{booking.selectedService ? (lang === 'de' ? booking.selectedService.titleDe : booking.selectedService.titleEn) : ''}</span>
                <span className="text-[#c2652a]">€{totalEstimate}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#605850] pt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#c2652a]" />
                  {booking.selectedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#c2652a]" />
                  {booking.selectedTime} Uhr
                </span>
                <span className="flex items-center gap-1 capitalize">
                  <Scissors className="w-3.5 h-3.5 text-[#c2652a]" />
                  {booking.hairLength}
                </span>
              </div>
            </div>

            {/* Client Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-1.5">
                  {t.name} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Khadija S."
                  className="w-full bg-white border border-[#d8d0c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c2652a]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-1.5">
                  {t.phone} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Tel. 67799015819"
                  className="w-full bg-white border border-[#d8d0c8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c2652a]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[#3a302a] mb-1.5">
                  {t.notes}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={lang === 'de' ? 'Farbwunsch z.B. #1B Schwarz oder #27 Honigblond...' : 'Color preference e.g. #1B Black or #27 Honey...'}
                  className="w-full bg-white border border-[#d8d0c8] rounded-xl p-3 text-sm focus:outline-none focus:border-[#c2652a]"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 py-4 rounded-full border border-[#d8d0c8] text-[#605850] text-xs font-bold uppercase tracking-wider hover:bg-[#ece6dc] transition-all"
              >
                {t.cancelBtn}
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="w-2/3 py-4 rounded-full bg-[#c2652a] hover:bg-[#3a302a] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{submitting ? '...' : t.confirmBtn}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
