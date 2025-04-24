import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/asha_photo2.JPG"
              alt="Asha Jyothi Lanka"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              Hi, I'm Asha Jyothi Lanka, a passionate Full Stack .Net Developer.
              <br></br>
              I have 15+ years of experience in designing and developing robust, 
              scalable applications using Microsoft stack. 
              <br></br>
              Experienced in Azure and AWS cloud technologies configuring and deploying applications 
              with Github actions via. CI/CD pipelines. 
              <br></br>
              Expertise working in agile methodologies, consistently delivering high-quality software
              solutions while collaborating effectively with cross-functional teams.
            </motion.p>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              With extensive experience in modern web technologies and a strong
              foundation in both frontend and backend development, I help
              businesses build scalable solutions.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
      
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
