import secLogo from '@/Assest/SEC_LOGO.png'
import ndicLogo from '@/Assest/ndicLogo-02-removebg-preview 1.png'
import isoLogo from '@/Assest/iso-logo-png_seeklogo-305564 1.png'
import ndpcLogo from '@/Assest/NDPC-copped-removebg-preview 1.png'
import cbnLogo from '@/Assest/role-of-cbn-1-removebg-preview 1.png'

const badges = [
  { src: secLogo, alt: 'SEC logo' },
  { src: ndicLogo, alt: 'NDIC logo' },
  { src: isoLogo, alt: 'ISO logo' },
  { src: ndpcLogo, alt: 'NDPC logo' },
  { src: cbnLogo, alt: 'CBN logo' },
]

export default function ComplianceBadges() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {badges.map((b) => (
        <div
          key={b.alt}
          data-aos="fade-up"
          className="flex items-center justify-center"
        >
          <img
            src={b.src}
            alt={b.alt}
            className="h-10 w-auto max-w-[250px] object-contain opacity-90"
          />
        </div>
      ))}
    </div>
  )
}
