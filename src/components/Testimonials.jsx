// import AnimatedSection from './AnimatedSection'

// const testimonials = [
//   {
//     quote: "Noura's attention to detail during her frontend internship was exceptional. She has a rare ability to balance aesthetics with performance.",
//     initials: 'AK',
//     name: 'Ahmed Khalil',
//     role: 'Lead Dev @ Bravo',
//   },
//   {
//     quote: "The CleanCity project showcase demonstrated deep architectural understanding. Working with Noura is always a productive experience.",
//     initials: 'SM',
//     name: 'Sara Mansour',
//     role: 'Project Lead @ NTI',
//   },
//   {
//     quote: 'Professional, dedicated, and highly skilled in API testing. A valuable addition to any development cycle.',
//     initials: 'OZ',
//     name: 'Dr. Omar Zaid',
//     role: 'IS Head @ Zagazig Univ',
//   },
// ]

// export default function Testimonials() {
//   return (
//     <section className="section-pad" style={{ overflow: 'hidden' }}>
//       <div className="container-xl mb-4">
//         <AnimatedSection>
//           <h2 className="section-title text-center">Voices of Collaboration</h2>
//         </AnimatedSection>
//       </div>

//       <div className="testimonial-track px-4 px-lg-5">
//         {testimonials.map((t) => (
//           <div className="testimonial-card" key={t.initials}>
//             <span
//               className="material-symbols-outlined text-primary-gold mb-4"
//               style={{ fontSize: 32, display: 'block' }}
//             >
//               format_quote
//             </span>
//             <p
//               style={{
//                 fontStyle: 'italic',
//                 color: 'var(--on-surface)',
//                 fontSize: 15,
//                 lineHeight: 1.8,
//                 marginBottom: 28,
//               }}
//             >
//               "{t.quote}"
//             </p>
//             <div className="d-flex align-items-center gap-3">
//               <div className="testimonial-avatar">{t.initials}</div>
//               <div>
//                 <p
//                   style={{
//                     fontWeight: 600,
//                     color: 'var(--on-surface)',
//                     margin: 0,
//                     fontSize: 14,
//                   }}
//                 >
//                   {t.name}
//                 </p>
//                 <p className="label-tag text-primary-gold mt-1">{t.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
