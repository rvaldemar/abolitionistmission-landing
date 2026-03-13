# frozen_string_literal: true

server "77.42.82.10",
  user: "deploy",
  roles: %w[web],
  ssh_options: {
    forward_agent: true,
    auth_methods: %w[publickey]
  }
