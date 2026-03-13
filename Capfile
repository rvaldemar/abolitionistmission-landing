# Load DSL and set up stages
require "capistrano/setup"

# Include default deployment tasks
require "capistrano/deploy"

# Load the SCM plugin (Git)
require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git

# Load custom tasks from lib/capistrano/tasks
Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }
