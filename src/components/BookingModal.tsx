import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Smartphone, MapPin, Gauge, ShieldCheck, Check, PlaneTakeoff, Info } from 'lucide-react';
import { VEHICLES } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCarId?: string;
}

export default function BookingModal({ isOpen, onClose, preselectedCarId }: BookingModalProps) {
  // Booking Form State Variables
  const [selectedCarId, setSelectedCarId] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [pickupDate, setPickupDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
  const [pickupTime, setPickupTime] = useState<string>('09:00');
  const [driverMode, setDriverMode] = useState<'self' | 'driver'>('self');
  const [destination, setDestination] = useState<string>('');
  const [promoCode, setPromoCode] = useState<string>('');
  
  // App system states
  const [showInvoice, setShowInvoice] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  // Pre-populate if selected
  useEffect(() => {
    if (preselectedCarId) {
      setSelectedCarId(preselectedCarId);
    } else if (VEHICLES.length > 0) {
      setSelectedCarId(VEHICLES[0].id);
    }
  }, [preselectedCarId, isOpen]);

  if (!isOpen) return null;

  const activeCar = VEHICLES.find((c) => c.id === selectedCarId) || VEHICLES[0];

  // Calculations
  let totalDays = 0;
  if (pickupDate && returnDate) {
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diffTime = end.getTime() - start.getTime();
    if (diffTime > 0) {
      totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
  }

  const basePricePerDay = driverMode === 'driver' ? activeCar.priceWithDriver : activeCar.priceSelfDrive;
  const isPromoValid = promoCode.trim().toUpperCase() === 'ARKANANNYAMAN';
  const discountPercent = isPromoValid ? 10 : 0; // 10% discount promo
  
  const rawSubtotal = totalDays > 0 ? totalDays * basePricePerDay : 0;
  const discountAmount = Math.floor((rawSubtotal * discountPercent) / 100);
  const grandTotal = rawSubtotal - discountAmount;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !pickupDate || !returnDate || totalDays <= 0) {
      alert('Mohon lengkapi formulir pendaftaran sewa dengan benar, termasuk tanggal rental yang valid.');
      return;
    }

    // Generate random premium booking ref
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const ref = `ARK-${randomNum}-${activeCar.brand.slice(0, 3).toUpperCase()}`;
    setBookingRef(ref);
    setShowInvoice(true);
  };

  const handleRedirectToWhatsApp = () => {
    const message = `*RESERVASI SEWA MOBIL PREMIUM - ARKANA RENT CAR*

*Ref Booking:* ${bookingRef}
*Kategori Sewa:* ${driverMode === 'driver' ? 'Sewa dengan Sopir (Driver Service)' : 'Sewa Lepas Kunci (Self-Drive)'}

*Data Pelanggan:*
• Nama Lengkap: ${fullName}
• No. WhatsApp: ${phone}

*Detail Sewa:*
• Armada Kendaraan: ${activeCar.name} (${activeCar.transmission})
• Tanggal Mulai: ${pickupDate} (Jam: ${pickupTime})
• Tanggal Selesai: ${returnDate}
• Durasi Sewa: ${totalDays} Hari
• Lokasi/Tujuan: ${destination || 'Dalam Kota'}

*Rincian Finansial:*
• Harga per Hari: Rp ${basePricePerDay.toLocaleString('id-ID')}
• Promo Kode: ${promoCode || 'Tidak ada'}
• Total Tarif: Rp ${grandTotal.toLocaleString('id-ID')} (SUDAH TERMASUK PPn & ASURANSI)

Mohon untuk segera diverifikasi jadwal kendaraannya oleh tim Sales Support. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/628123456789?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md transition-all">
      <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[32px] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold text-[#146AFF] tracking-widest">
              Layanan Reservasi Premium
            </span>
            <h3 className="text-xl font-black text-slate-900 dark:text-white leading-none mt-0.5">
              Formulir Sewa Arkana
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            id="modal-close-btn"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content Frame */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {!showInvoice ? (
            /* Standard Booking Form */
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              
              {/* Promo code alert badge banner */}
              <div className="p-3.5 bg-blue-50/70 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 rounded-2xl flex items-start space-x-2.5">
                <Info size={16} className="text-[#146AFF] shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                  <strong>Tips Hemat:</strong> Gunakan kode promo <strong className="text-[#146AFF]">ARKANANYAMAN</strong> untuk potongan harga sewa 10% eksklusif untuk penyewa baru.
                </p>
              </div>

              {/* Grid 1: Select Fleet & Rent Scheme */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Pilih Unit Armada
                  </label>
                  <select
                    value={selectedCarId}
                    onChange={(e) => setSelectedCarId(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-950 dark:text-white font-bold tracking-wide outline-none focus:border-[#146AFF] transition-colors"
                    id="modal-select-vehicle"
                  >
                    {VEHICLES.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name} ({car.transmission})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Skema Layanan Sopir
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-950 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => setDriverMode('self')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${
                        driverMode === 'self'
                          ? 'bg-[#146AFF] text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                      id="modal-scheme-self"
                    >
                      Lepas Kunci
                    </button>
                    <button
                      type="button"
                      onClick={() => setDriverMode('driver')}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${
                        driverMode === 'driver'
                          ? 'bg-[#146AFF] text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                      id="modal-scheme-driver"
                    >
                      Dengan Sopir
                    </button>
                  </div>
                </div>
              </div>

              {/* Grid 2: Dates of Rent */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Tanggal Mulai Sewa
                  </label>
                  <input
                    type="date"
                    required
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-xs text-slate-950 dark:text-white font-bold outline-none focus:border-[#146AFF] transition-colors"
                    id="modal-input-pickup-date"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Tanggal Selesai Sewa
                  </label>
                  <input
                    type="date"
                    required
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-xs text-slate-950 dark:text-white font-bold outline-none focus:border-[#146AFF] transition-colors"
                    id="modal-input-return-date"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Jam Penjemputan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 09:00"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-xs text-slate-950 dark:text-white font-mono font-bold outline-none focus:border-[#146AFF] transition-colors"
                    id="modal-input-pickup-time"
                  />
                </div>
              </div>

              {/* Grid 3: Customer personal info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Nama Lengkap Anda
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-950 dark:text-white font-bold outline-none focus:border-[#146AFF] transition-colors"
                    id="modal-input-name"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-950 dark:text-white font-mono font-bold outline-none focus:border-[#146AFF] transition-colors"
                    id="modal-input-phone"
                  />
                </div>
              </div>

              {/* Grid 4: Destination & Promo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Tujuan Perjalanan / Alamat Pengantaran
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Bandara Juanda / Hotel Sheraton"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-950 dark:text-white font-bold outline-none focus:border-[#146AFF] transition-colors"
                    id="modal-input-destination"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Kode Promo
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Masukkan kode voucher (jika ada)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-4 pr-12 py-3.5 text-xs text-slate-950 dark:text-white font-bold uppercase tracking-wider outline-none focus:border-[#146AFF] transition-colors"
                      id="modal-input-promo"
                    />
                    {isPromoValid && (
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-500 text-xs font-black">✓ OK</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Live Cost Estimator Card */}
              <div className="bg-[#0F172A] p-5 rounded-3xl text-white space-y-4">
                <span className="text-[9px] font-bold uppercase tracking-widest font-mono text-slate-400 block border-b border-white/10 pb-2">
                  RINCIANESTIMASI TARIF SEWA
                </span>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-sans font-bold">Model Kendaraan</span>
                  <span className="font-bold text-white">{activeCar.name}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-sans font-bold">Standard Tarif Perhari</span>
                  <span className="font-bold text-white">Rp {basePricePerDay.toLocaleString('id-ID')}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-sans font-bold">Durasi Sewa Terhitung</span>
                  <span className={`font-mono font-bold ${totalDays > 0 ? 'text-amber-400 text-sm' : 'text-slate-400'}`}>
                    {totalDays > 0 ? `${totalDays} Hari` : 'Masukkan Tanggal Valid'}
                  </span>
                </div>

                {isPromoValid && (
                  <div className="flex justify-between items-center text-xs text-emerald-400">
                    <span className="font-bold">Potongan Promo (10%)</span>
                    <span className="font-mono font-bold">- Rp {discountAmount.toLocaleString('id-ID')}</span>
                  </div>
                )}

                <div className="flex justify-between items-center border-t border-slate-800/80 pt-3">
                  <span className="text-xs font-black uppercase text-slate-350">Estimasi Total Bayar</span>
                  <span className="text-lg font-black text-white font-sans leading-none">
                    Rp {grandTotal.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              {/* Submit trigger */}
              <button
                type="submit"
                disabled={totalDays <= 0}
                className={`w-full py-4 rounded-2xl text-white font-sans font-black text-[13px] uppercase tracking-wider transition-all cursor-pointer ${
                  totalDays > 0
                    ? 'bg-gradient-to-r from-[#146AFF] to-blue-700 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.01] active:scale-95'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 pointer-events-none'
                }`}
                id="modal-booking-submit-form"
              >
                Lanjutkan Kirim Reservasi
              </button>

            </form>
          ) : (
            /* Premium Invoice Ticket Details Success Screen */
            <div className="space-y-6 text-center py-4">
              
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                <Check size={36} className="stroke-[3px]" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-none">
                  Reservasi Disusun!
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-sans">
                  Sistem kami telah mengkalkulasikan rincian sewa Anda secara akurat.
                </p>
              </div>

              {/* Physical ticket template block */}
              <div className="border border-slate-250/60 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 rounded-3xl p-6 text-left space-y-4 max-w-md mx-auto shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#146AFF]/5 to-transparent rounded-tr-3xl rounded-bl-full pointer-events-none" />
                
                <div className="flex justify-between items-center text-[10px] uppercase font-mono font-bold text-slate-405 border-b border-slate-200/50 dark:border-slate-800 pb-2">
                  <span>ARKANA TICKET SUMMARY</span>
                  <span className="text-[#146AFF]">{bookingRef}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase font-mono">Nama Penyewa</span>
                    <span className="font-extrabold text-slate-900 dark:text-white font-sans">{fullName}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase font-mono">No. WhatsApp</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 font-mono">{phone}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase font-mono">Model Unit</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">{activeCar.name}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-505 font-bold uppercase font-mono">Layanan</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">
                      {driverMode === 'driver' ? 'Dengan Sopir' : 'Lepas Kunci'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase font-mono">Mulai Rental</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 font-mono">{pickupDate} ({pickupTime})</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase font-mono">Selesai Rental</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 font-mono">{returnDate}</span>
                  </div>
                </div>

                <div className="border-t border-slate-250/65 dark:border-slate-800 pt-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase font-mono leading-none">Total Durasi</span>
                    <span className="font-extrabold text-slate-700 dark:text-white font-mono">{totalDays} Hari</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase font-mono leading-none">Total Bayar</span>
                    <span className="text-base font-black text-slate-900 dark:text-white font-sans">
                      Rp {grandTotal.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instructions and redirects */}
              <div className="space-y-4 max-w-md mx-auto pt-2">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  Langkah Terakhir: Hubungkan reservasi digital Anda ke konsultan WhatsApp Arkana Rent Car di bawah untuk verifikasi unit langsung dalam waktu 2 menit.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleRedirectToWhatsApp}
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-500/15 flex items-center justify-center space-x-2 transition-all cursor-pointer hover:scale-[1.01]"
                    id="whatsapp-confirm-and-redirect"
                  >
                    <span>Hubungkan WhatsApp Admin</span>
                  </button>

                  <button
                    onClick={() => {
                      setShowInvoice(false);
                      onClose();
                    }}
                    className="w-full py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-sans font-bold text-xs uppercase tracking-wider rounded-2xl transition-all"
                    id="finish-booking-cancel-modal"
                  >
                    Tutup Kembali
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
