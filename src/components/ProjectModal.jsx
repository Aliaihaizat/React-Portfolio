const [filter, setFilter] = useState('all');

const filteredProjects = filter === 'all' 
  ? projects 
  : projects.filter(project => project.type === filter);