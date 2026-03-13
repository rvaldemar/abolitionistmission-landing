# frozen_string_literal: true

lock "~> 3.19"

set :application, "abolisionist_mission"
set :repo_url, "git@github.com:rvaldemar/abolitionistmission-landing.git"

set :branch, ENV.fetch("BRANCH", "main")

set :deploy_to, "/var/www/abolisionist_mission"

set :format, :airbrussh
set :log_level, :info
set :pty, true

set :keep_releases, 5

set :ssh_options, {
  verify_host_key: :never,
  forward_agent: true
}

# No linked files or dirs needed for a static site
