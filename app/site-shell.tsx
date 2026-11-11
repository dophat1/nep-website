'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { LanguageProvider, useLanguage } from './i18n';

const links=[['/platform','platform'],['/demo','demo'],['/company','company'],['/contact','contact']] as const;
function Shell({children}:{children:React.ReactNode}){
  const {lang,setLang,t}=useLanguage(); const path=usePathname(); const [open,setOpen]=useState(false);
  return <><a href="#main" className="skip-link">Skip to content</a><header className="site-header"><div className="container nav-inner"><Link href="/" className="brand" aria-label="Nếp Technologies home" onClick={()=>setOpen(false)}><span className="brand-mark">n<span>.</span></span><span>Nếp<span className="brand-light"> technologies</span></span></Link><nav className={open?'nav-links open':'nav-links'} aria-label="Main navigation">{links.map(([href,key])=><Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{t(key)}</Link>)}<div className="lang-switch" aria-label="Language"><button type="button" onClick={()=>setLang('en')} aria-pressed={lang==='en'}>EN</button><span>/</span><button type="button" onClick={()=>setLang('vi')} aria-pressed={lang==='vi'}>VI</button></div></nav><Link href="/demo" className="nav-cta">{t('tryDemo')} <ArrowUpRight size={16}/></Link><button className="menu-toggle" type="button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header><main id="main">{children}</main><footer className="site-footer"><div className="container footer-top"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">n<span>.</span></span><span>Nếp<span className="brand-light"> technologies</span></span></Link><p>Less busywork. More business.</p></div><div className="footer-links">{links.map(([href,key])=><Link href={href} key={href}>{t(key)}</Link>)}</div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Nếp Technologies</span><span>{t('footerDisclosure')}</span></div></footer></>;
}
export function SiteShell({children}:{children:React.ReactNode}){return <LanguageProvider><Shell>{children}</Shell></LanguageProvider>}
