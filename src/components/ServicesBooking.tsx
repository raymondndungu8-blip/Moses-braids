import React, { useState } from 'react';
import { Check, Clock, Receipt, AlertCircle, Send } from 'lucide-react';
import { BookingState, Language, ServiceItem } from '../types';
import { DICTIONARY, SERVICE_ITEMS } from '../data/content';

const WHATSAPP_NUMBER = '4367799015819';

interface ServicesBookingProps {
  lang: Language;
  preselectedServiceId?: string | null;
}

export const ServicesBooking: React.FC<ServicesBookingProps> = ({
  lang,
  preselectedServiceId
}) => {
  const t = DICTIONARY[lang].servicesPage;

  // Initialize selected service
  const initialService = preselectedServiceId
    ? SERVICE_ITEMS.find((s) => s.id === preselectedServiceId) || SERVICE_ITEMS[0]
    : SERVICE_ITEMS[0];

  const [bookingState, setBookingState] = useState<BookingState>({
    selectedService: initialService,
    selectedDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], // 3 days ahead
    selectedTime: '10:00',
    hairLength: 'shoulder',
    lengthAddonPrice: 0,
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    notes: ''
  });

  const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

  const handleLengthChange = (len: 'shoulder' | 'mid-back' | 'waist' | 'buttocks') => {
    let price = 0;
    if (len === 'mid-back') price = 30;
    if (len === 'waist') price = 50;
    if (len === 'buttocks') price = 80;

    setBookingState((prev) => ({
      ...prev,
      hairLength: len,
      lengthAddonPrice: price
    }));
  };

  const handleServiceSelect = (svc: ServiceItem) => {
    setBookingState((prev) => ({
      ...prev,
      selectedService: svc
    }));
  };

  const calculateTotal = () => {
    if (!bookingState.selectedService) return 0;
    return bookingState.selectedService.priceStart + bookingState.lengthAddonPrice;
  };

  // Proceed → open WhatsApp chat with Moses, session details pre-filled,
  // so every request lands directly in his WhatsApp.
  const handleWhatsAppProceed = () => {
    const s = bookingState.selectedService;
    if (!s) return;
    const styleName = lang === 'de' ? s.titleDe : s.titleEn;
    let lengthLabel = t.lengthOptions.shoulder;
    if (bookingState.hairLength === 'mid-back') lengthLabel = t.lengthOptions.midBack;
    if (bookingState.hairLength === 'waist') lengthLabel = t.lengthOptions.waist;
    if (bookingState.hairLength === 'buttocks') lengthLabel = t.lengthOptions.buttocks;
    const lengthShort = lengthLabel.split('(')[0].trim();

    const lines =
      lang === 'de'
        ? [
            'Hallo Moses! 👋 Ich möchte gerne einen Termin buchen:',
            '',
            `💇 Stil: ${styleName}`,
            `📅 Datum: ${bookingState.selectedDate}`,
            `🕐 Uhrzeit: ${bookingState.selectedTime}`,
            `📏 Haarlänge: ${lengthShort}`,
            `💰 Geschätzter Preis: €${calculateTotal()}`,
            '',
            'Mein Name: ',
          ]
        : [
            'Hello Moses! 👋 I would like to book a session:',
            '',
            `💇 Style: ${styleName}`,
            `📅 Date: ${bookingState.selectedDate}`,
            `🕐 Time: ${bookingState.selectedTime}`,
            `📏 Hair length: ${lengthShort}`,
            `💰 Estimated price: €${calculateTotal()}`,
            '',
            'My name: ',
          ];

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <section className="pt-14 pb-24 sm:pt-16 bg-[#faf5ee]" id="booking-widget">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c2652a] block mb-3">
            MOSES
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-[#3a302a] mb-4">
            {t.title}
          </h2>
          <p className="text-[#605850] text-base font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICE_ITEMS.map((service) => {
            const isSelected = bookingState.selectedService?.id === service.id;
            const title = lang === 'de' ? service.titleDe : service.titleEn;
            return (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer border flex flex-col justify-between min-h-[30rem] ${
                  isSelected
                    ? 'border-[#c2652a] ring-2 ring-[#c2652a]/50 shadow-2xl scale-[1.01]'
                    : 'border-white/10 hover:border-[#e08850]/50 shadow-lg'
                }`}
              >
                {/* Braid reference photo as the card wallpaper */}
                {service.image && (
                  <img
                    src={service.image}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                {/* Warm dark scrim keeps the copy readable over any photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241d19]/96 via-[#241d19]/82 to-[#241d19]/58" />
                <div className="absolute inset-0 mix-blend-soft-light opacity-30 bg-gradient-to-br from-[#e08850] to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  {service.popular && (
                    <span className="absolute top-8 right-8 px-3 py-1 rounded-full bg-[#c2652a] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                      {lang === 'de' ? 'Beliebt' : 'Popular'}
                    </span>
                  )}

                  <div>
                    <div className="mb-4">
                      <h3 className="font-serif text-3xl font-semibold text-white drop-shadow">
                        {title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[#eae2da] mt-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#f0a878]" />
                        <span>{lang === 'de' ? service.durationDe : service.durationEn}</span>
                      </div>
                    </div>

                    <div className="mb-6 font-serif text-3xl font-normal text-[#f0a878] drop-shadow">
                      {lang === 'de' ? service.priceLabelDe : service.priceLabelEn}
                    </div>

                    <p className="text-sm text-[#eae2da]/90 font-light leading-relaxed mb-8">
                      {lang === 'de' ? service.descriptionDe : service.descriptionEn}
                    </p>

                    <ul className="space-y-2.5 mb-8 border-t border-white/15 pt-6">
                      {(lang === 'de' ? service.featuresDe : service.featuresEn).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#f3ede5]">
                          <Check className="w-4 h-4 text-[#f0a878] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-[#c2652a] text-white shadow-md'
                          : 'bg-white/95 text-[#3a302a] hover:bg-[#c2652a] hover:text-white'
                      }`}
                    >
                      <span>{isSelected ? (lang === 'de' ? 'Ausgewählt' : 'Selected') : t.bookBtn}</span>
                      {isSelected && <Check className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Booking Configurator Panel */}
        <div className="bg-[#f2ece4] rounded-3xl border border-[#ece6dc] p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#3a302a] mb-2 text-center">
              {t.widgetHeading}
            </h3>
            <p className="text-center text-xs text-[#78706a] uppercase tracking-widest mb-10">
              {bookingState.selectedService
                ? (lang === 'de' ? bookingState.selectedService.titleDe : bookingState.selectedService.titleEn)
                : t.selectServicePrompt}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              
              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3a302a] mb-3">
                  {t.dateLabel}
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={bookingState.selectedDate}
                  onChange={(e) => setBookingState({ ...bookingState, selectedDate: e.target.value })}
                  className="w-full bg-white border border-[#d8d0c8] rounded-2xl px-5 py-3.5 text-sm text-[#3a302a] focus:outline-none focus:border-[#c2652a] font-medium shadow-sm"
                />
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3a302a] mb-3">
                  {t.timeLabel}
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => {
                    const active = bookingState.selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setBookingState({ ...bookingState, selectedTime: slot })}
                        className={`py-3 rounded-xl text-xs font-bold font-mono tracking-wider transition-all ${
                          active
                            ? 'bg-[#3a302a] text-white shadow-md scale-[1.02]'
                            : 'bg-white border border-[#d8d0c8] text-[#605850] hover:border-[#c2652a]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Hair Length Options */}
            <div className="mb-10">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3a302a] mb-3">
                {t.lengthLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {(['shoulder', 'mid-back', 'waist', 'buttocks'] as const).map((opt) => {
                  const active = bookingState.hairLength === opt;
                  let label = t.lengthOptions.shoulder;
                  if (opt === 'mid-back') label = t.lengthOptions.midBack;
                  if (opt === 'waist') label = t.lengthOptions.waist;
                  if (opt === 'buttocks') label = t.lengthOptions.buttocks;

                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleLengthChange(opt)}
                      className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                        active
                          ? 'bg-[#c2652a] border-[#c2652a] text-white shadow-md'
                          : 'bg-white border-[#d8d0c8] text-[#3a302a] hover:border-[#c2652a]'
                      }`}
                    >
                      <span className="text-xs font-semibold block mb-1">
                        {label.split('(')[0]}
                      </span>
                      <span className={`text-[10px] font-mono ${active ? 'text-[#fbe8d8]' : 'text-[#78706a]'}`}>
                        ({label.split('(')[1] || ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Summary Bar */}
            <div className="bg-white rounded-2xl p-6 border border-[#d8d0c8] flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fbe8d8] flex items-center justify-center text-[#c2652a]">
                  <Receipt className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#78706a] block font-semibold">
                    {t.summaryTitle}
                  </span>
                  <span className="text-sm font-medium text-[#3a302a]">
                    {bookingState.selectedService
                      ? (lang === 'de' ? bookingState.selectedService.titleDe : bookingState.selectedService.titleEn)
                      : ''}{' '}
                    • {bookingState.selectedDate} @ {bookingState.selectedTime}
                  </span>
                </div>
              </div>

              <div className="text-right flex sm:flex-col items-baseline justify-between w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-[#ece6dc]">
                <span className="text-xs text-[#78706a] uppercase tracking-wider">
                  {t.totalEstimated}
                </span>
                <span className="font-serif text-3xl font-bold text-[#c2652a]">
                  €{calculateTotal()}
                </span>
              </div>
            </div>

            {/* Note about deposit/consultation */}
            <div className="flex items-start gap-3 mb-8 p-4 rounded-xl bg-[#eae2da]/60 text-xs text-[#605850]">
              <AlertCircle className="w-4 h-4 text-[#c2652a] flex-shrink-0 mt-0.5" />
              <span>
                {lang === 'de'
                  ? 'Hinweis: Nach Prüfung Ihrer Termin anfrage senden wir Ihnen eine detaillierte Bestätigung inkl. Vorbereitungstipps für Ihr Haar.'
                  : 'Note: Once we review your requested date, our stylist will send a booking confirmation along with scalp prep guidance.'}
              </span>
            </div>

            {/* Proceed → WhatsApp chat with the session details */}
            <button
              type="button"
              onClick={handleWhatsAppProceed}
              disabled={!bookingState.selectedService}
              className="w-full py-5 rounded-full bg-[#25D366] hover:bg-[#3a302a] text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {lang === 'de' ? 'Anfrage per WhatsApp senden' : 'Send request via WhatsApp'}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};
