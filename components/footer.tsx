import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "Features", href: "#features" },
      { name: "Amenities", href: "#amenities" },
      { name: "Location", href: "#location" },
      { name: "Contact", href: "#contact" },
    ],
    Services: [
      { name: "Private Offices", href: "#" },
      { name: "Shared Workspaces", href: "#" },
      { name: "Meeting Rooms", href: "#" },
      { name: "Virtual Offices", href: "#" },
      { name: "Event Spaces", href: "#" },
    ],
    Support: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Community", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold gradient-text font-[family-name:var(--font-space-grotesk)]">
                Kathir Tech Park
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Leading technology park offering premium office spaces and world-class infrastructure for the next
              generation of innovative companies.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Innovation District, Tech City</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@kathirtechpark.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2024 Kathir Tech Park. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
