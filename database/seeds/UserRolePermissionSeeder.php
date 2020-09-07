<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class UserRolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'create user']);
        Permission::create(['name' => 'view user']);
        Permission::create(['name' => 'create config']);
        Permission::create(['name' => 'view config']);
        Permission::create(['name' => 'create transaction']);
        Permission::create(['name' => 'view transaction']);

        // create roles and assign existing permissions

        $roleSuperAdmin = Role::create(['name' => 'Super Admin']);
        // gets all permissions via Gate::before rule; see AuthServiceProvider

        $roleAdmin = Role::create(['name' => 'Admin']);
        $roleAdmin->givePermissionTo('create user');
        $roleAdmin->givePermissionTo('view user');
        $roleAdmin->givePermissionTo('create config');
        $roleAdmin->givePermissionTo('view config');
        $roleAdmin->givePermissionTo('view transaction');

        $roleUser = Role::create(['name' => 'User']);
        $roleUser->givePermissionTo('create transaction');
        $roleUser->givePermissionTo('view transaction');

        // create demo users
        $superAdmin = Factory(App\User::class)->create([
            'name' => 'Super Admin',
            'email' => 'superadmin@email.com',
            'password' => bcrypt('password123')
        ]);
        $superAdmin->assignRole($roleSuperAdmin);

        // create demo users
        $admin = Factory(App\User::class)->create([
            'name' => 'Admin 1',
            'email' => 'admin1@email.com',
            'password' => bcrypt('password123')
        ]);
        $admin->assignRole($roleAdmin);

        // create demo users
        $user = Factory(App\User::class)->create([
            'name' => 'User 1',
            'email' => 'user01@email.com',
            'password' => bcrypt('password123')
        ]);
        $user->assignRole($roleUser);

        /*
        $u = App\User::find(1)->firstOrFail();
        if($u) {
            $u->assignRole($roleUser);
        }
        */
    }
}
