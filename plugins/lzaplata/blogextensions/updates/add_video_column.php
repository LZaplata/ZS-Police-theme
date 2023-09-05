<?php

namespace LZaplata\BlogExtensions\updates;

use October\Rain\Database\Updates\Migration;
use Schema;

class AddVideoColumn extends Migration
{
    public function up()
    {
        if (Schema::hasColumn("rainlab_blog_posts", "video")) {
            return;
        }

        Schema::table("rainlab_blog_posts", function ($table) {
            $table->text("video")->nullable();
        });
    }

    public function down()
    {
        if (Schema::hasColumn("rainlab_blog_posts", "video")) {
            Schema::table("rainlab_blog_posts", function ($table) {
                $table->dropColumn("video");
            });
        }
    }
}
