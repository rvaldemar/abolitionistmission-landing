namespace :api do
  desc "Install API dependencies"
  task :install do
    on roles(:web) do
      within "#{release_path}/api" do
        execute :npm, :install, "--production"
      end
    end
  end

  desc "Restart API service"
  task :restart do
    on roles(:web) do
      execute :sudo, :systemctl, :restart, "abolisionist_mission_api"
    end
  end
end

after "deploy:publishing", "api:install"
after "api:install", "api:restart"
