import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h2 className="text-4xl font-bold">Empower Your Team with Efficient Task Management</h2>
      <p className="py-6">Streamline collaboration, track progress, and achieve success with our collaborative task management platform.</p>
      <Link>
      <button className="btn btn-primary">Get Started</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default Hero