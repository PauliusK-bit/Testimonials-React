import kiraImage from "./images/image-kira (2).jpg";

function SecondaryTestimonials() {
  return (
    <div className="secondary-testimonials">
      <div className="testimonial-item">
        <div className="testimonial-author-wrapper">
          <div className="testimonial-image-wrapper">
            <img src={kiraImage} alt="" />
          </div>
          <div className="testimonial-author-info">
            <span className="testimonial-author-name">Kira Whittle</span>
            <span className="testimonial-author-verified">
              Verified Graduate
            </span>
          </div>
        </div>

        <h2 className="testimonial-title">
          Such a life-changing experience. Highly recommended!
        </h2>
        <p className="testimonial-description">
          Before joining the bootcamp, I’ve never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I’ve
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend
        </p>
      </div>
    </div>
  );
}

export default SecondaryTestimonials;
