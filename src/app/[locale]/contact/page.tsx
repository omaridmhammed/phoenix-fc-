import { useTranslations } from 'next-intl';
import SectionHeader from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    const t = useTranslations('Common');

    return (
        <div className="pt-24 pb-16 min-h-screen bg-phoenix-offwhite">
            <div className="container mx-auto px-4">
                <SectionHeader title={t('contact')} subtitle="Get in touch with the club." className="text-phoenix-black" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <div className="space-y-6">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 uppercase mb-1">Name</label>
                                <input type="text" className="w-full bg-white border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-phoenix-green text-black" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 uppercase mb-1">Email</label>
                                <input type="email" className="w-full bg-white border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-phoenix-green text-black" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 uppercase mb-1">Message</label>
                                <textarea rows={5} className="w-full bg-white border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-phoenix-green text-black"></textarea>
                            </div>
                            <Button size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>

                    <div className="space-y-8 text-black">
                        <div>
                            <h3 className="text-xl font-bold uppercase text-phoenix-green mb-2">Address</h3>
                            <p>123 Phoenix Avenue<br />City Center, State<br />12345</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase text-phoenix-green mb-2">Contact Info</h3>
                            <p>Phone: +1 (555) 123-4567<br />Email: info@phoenixfc.com</p>
                        </div>
                        <div className="h-48 bg-gray-300 w-full flex items-center justify-center rounded-sm">
                            <span className="text-gray-500 font-bold uppercase">Map Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
